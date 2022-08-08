import { Router } from "express";
import { getStory } from "../controllers/storyController.js";
const router = Router();

router.get("/", getStory);

export default router;
