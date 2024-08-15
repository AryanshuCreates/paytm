import { Router } from "express";
import { signin, signup } from "../controllers/users.js";

const router = Router();
router.post("/signup", signup);
router.route("/signin").post(signin);
router.route("/update");
router.route("/signout");

export default router;
