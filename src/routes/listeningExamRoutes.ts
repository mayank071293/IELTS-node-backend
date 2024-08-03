import { Router } from "express";
import passport from "passport";
import { getListeningExam } from "../controllers/listeningExamController";

const router = Router();
router.get("/:id", passport.authenticate("jwt", { session: false }), getListeningExam);

export default router;