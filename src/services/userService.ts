import User from "../models/user";

const getUser = async (id: string): Promise<User | null> => {
  try {
    const user = (await User.findById(id)) as User;
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Could not fetch user with ID ${id}: ${error?.message}`);
    } else {
      throw new Error(
        `Could not fetch user with ID ${id}: An unknown error occurred`
      );
    }
  }
};

export default {
  getUser,
};
