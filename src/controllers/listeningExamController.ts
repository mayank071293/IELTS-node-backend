import { Request, Response } from "express";
import listeningExamService from "../services/listeningExamService";

export const getListeningExam = async (req: Request, res: Response) => {
  try {
    const listeningExam = await listeningExamService.getListeningExam(req.params.id);
    res.json(listeningExam);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};
