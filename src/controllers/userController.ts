import { Request, Response } from "express";
import userService from "../services/userService";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.json(user);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};
