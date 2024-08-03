import { Request, Response } from "express";
import readingExamService from "../services/readingExamService";

export const getReadingExam = async (req: Request, res: Response) => {
  try {
    const readingExam = await readingExamService.getReadingExam(req.params.id);
    res.json(readingExam);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};
