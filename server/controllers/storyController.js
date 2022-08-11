import mongoose from "mongoose";
import Story from "../models/storyModel.js";

export const getStory = async (req, res) => {
  try {
    const story = await Story.find();
    res.status(200).json(story);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createStory = async (req, res) => {
  const body = req.body;
  const newStory = new Story({
    ...body,
    userId: req.userId,
    postDate: new Date().toISOString(),
  });

  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateStory = async (req, res) => {
  const { id: _id } = req.params;
  const story = req.body;

  if (mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("This id doesn't belong to any story");
  }

  const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });
  res.json(updatedStory);
};

export const deleteStory = async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("This id doesn't belong to any story");
  }

  await Story.findByIdAndRemove(id);

  res.json({ message: "Story deleted successfully" });
};

export const likeStory = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated User!" });

  if (mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("This id doesn't belong to any story");
  }

  const story = await Story.findById(id);
  const index = story.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    story.likes.push(req.userId);
  } else {
    story.likes = story.likes.filter((id) => id !== String(req.userId));
  }

  const updatedStory = await Story.findByIdAndUpdate(
    id,
    story,
    {
      likes: story.likes + 1,
    },
    { new: true }
  );

  res.json(updatedStory);
};
