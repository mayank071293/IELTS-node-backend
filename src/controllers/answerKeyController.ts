import { Request, Response } from "express";
import answerKeyService from "../services/answerKeyService";
import User from "../models/user";

export const postAnswerKey = async (req: Request, res: Response) => {
  try {
    const result = await answerKeyService.postAnswerKey(
      req.params.exam_id,
      req.body
    );
    res.json(result);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};

export const getScore = async (req: Request, res: Response) => {
  try {
    const result = await answerKeyService.getScore(
      req.user as User,
      req.params.exam_id,
      req.body.exam_type,
      req.body.responses
    );
    res.json(result);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};
