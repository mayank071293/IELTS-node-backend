import mongoose from "mongoose";
import User from "../src/models/user";
import userService from "../src/services/userService";

jest.mock("../src/models/user");

describe("UserService", () => {
  describe("getUser", () => {
    it("should return a user when found", async () => {
      const userId = new mongoose.Types.ObjectId().toString();
      const mockUser = {
        _id: userId,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        password: "hashedpassword", // Assume this is hashed
      };

      // Mock the findById method to return the mockUser
      (User.findById as jest.Mock).mockResolvedValue(mockUser);

      const user = await userService.getUser(userId);

      expect(user).toEqual(mockUser);
      expect(User.findById).toHaveBeenCalledWith(userId);
    });

    it("should return null when the user is not found", async () => {
      const userId = new mongoose.Types.ObjectId().toString();

      // Mock the findById method to return null
      (User.findById as jest.Mock).mockResolvedValue(null);

      const user = await userService.getUser(userId);

      expect(user).toBeNull();
      expect(User.findById).toHaveBeenCalledWith(userId);
    });

    it("should handle errors thrown by User.findById", async () => {
      const userId = new mongoose.Types.ObjectId().toString();
      const errorMessage = "Database error";

      // Mock the findById method to throw an error
      (User.findById as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await expect(userService.getUser(userId)).rejects.toThrow(
        `Could not fetch user with ID ${userId}: ${errorMessage}`
      );
    });
  });
});
