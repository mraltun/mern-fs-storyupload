import { Router } from "express";
import {
  getStory,
  createStory,
  updateStory,
  deleteStory,
  likeStory,
} from "../controllers/storyController.js";

import authentication from "../middlewares/authMiddleware.js";
const router = Router();

router.get("/", getStory);
router.post("/", authentication, createStory);
router.patch("/:id", authentication, updateStory);
router.delete("/:id", authentication, deleteStory);
router.patch("/:id/likeStory", authentication, likeStory);

export default router;
