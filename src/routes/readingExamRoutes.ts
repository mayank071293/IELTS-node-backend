import { Router } from "express";
import passport from "passport";
import { getReadingExam } from "../controllers/readingExamController";

const router = Router();
router.get("/:id", passport.authenticate("jwt", { session: false }), getReadingExam);

export default router;