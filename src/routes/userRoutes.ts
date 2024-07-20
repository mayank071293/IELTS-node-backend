import { Router } from "express";
import passport from "passport";
import { getUser } from "../controllers/userController";

const router = Router();
router.get("/:id", passport.authenticate("jwt", { session: false }), getUser);

export default router;
