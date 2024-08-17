import { Router } from "express";
import passport from "passport";
import { getWritingExam } from "../controllers/writingExamController";

const router = Router();
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getWritingExam
);

export default router;
