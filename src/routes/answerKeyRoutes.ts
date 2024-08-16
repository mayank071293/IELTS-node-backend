import { Router } from "express";
import passport from "passport";
import { postAnswerKey, getScore } from "../controllers/answerKeyController";

const router = Router();
router.post(
  "/:exam_id",
  passport.authenticate("jwt", { session: false }),
  postAnswerKey
);
router.get(
  "/:exam_id",
  passport.authenticate("jwt", { session: false }),
  getScore
);

export default router;
