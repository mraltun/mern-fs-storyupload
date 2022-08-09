import { Router } from "express";
import {
  getStory,
  createStory,
  updateStory,
} from "../controllers/storyController.js";
const router = Router();

router.get("/", getStory);
router.post("/", createStory);
router.patch("/:id", updateStory);

export default router;
