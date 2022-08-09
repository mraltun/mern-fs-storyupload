import { Router } from "express";
import {
  getStory,
  createStory,
  updateStory,
  deleteStory,
} from "../controllers/storyController.js";
const router = Router();

router.get("/", getStory);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);

export default router;
