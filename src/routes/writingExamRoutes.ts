import { Router } from "express";
import passport from "passport";
import {
  getWritingExam,
  postWritingExamResponse,
} from "../controllers/writingExamController";

const router = Router();
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getWritingExam
);

router.post(
  "/:exam_id",
  passport.authenticate("jwt", { session: false }),
  postWritingExamResponse
);

export default router;
