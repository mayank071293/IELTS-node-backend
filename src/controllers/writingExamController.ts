import { Request, Response } from "express";
import writingExamService from "../services/writingExamService";
import User from "../models/user";

export const getWritingExam = async (req: Request, res: Response) => {
  try {
    const writingExam = await writingExamService.getWritingExam(req.params.id);
    res.json(writingExam);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};

export const postWritingExamResponse = async (req: Request, res: Response) => {
  try {
    const result = await writingExamService.postWritingExamResponse(
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
