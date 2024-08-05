import { Router } from "express";
import passport from "passport";
import { postAnswerKey } from "../controllers/answerKeyController";

const router = Router();
router.post(
  "/:exam_id",
  passport.authenticate("jwt", { session: false }),
  postAnswerKey
);

export default router;
