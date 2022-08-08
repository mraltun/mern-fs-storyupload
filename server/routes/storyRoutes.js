import { Router } from "express";
import { getStories } from "../controllers/storyController.js";
const router = Router();

router.get("/", getStories);

export default router;
