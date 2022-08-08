import { Router } from "express";
import { getStory, createStory } from "../controllers/storyController.js";
const router = Router();

router.get("/", getStory);
router.post("/", createStory);

export default router;
