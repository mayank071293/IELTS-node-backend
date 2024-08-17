import { Request, Response } from "express";
import writingExamService from "../services/writingExamService";

export const getWritingExam = async (req: Request, res: Response) => {
  try {
    const writingExam = await writingExamService.getWritingExam(req.params.id);
    res.json(writingExam);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};
