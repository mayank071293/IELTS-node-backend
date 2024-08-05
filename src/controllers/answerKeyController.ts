import { Request, Response } from "express";
import answerKeyService from "../services/answerKeyService";

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
