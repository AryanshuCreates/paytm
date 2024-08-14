import { Router } from "express";

const router = Router();
router.route("/signup");
router.route("/signin").post();
router.route("/update");
router.route("/signout");

export default router;
