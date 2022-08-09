import { Router } from "express";
import {
  getStory,
  createStory,
  updateStory,
  deleteStory,
  likeStory,
} from "../controllers/storyController.js";
const router = Router();

router.get("/", getStory);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);
router.patch("/:id/likeStory", likeStory);

export default router;
