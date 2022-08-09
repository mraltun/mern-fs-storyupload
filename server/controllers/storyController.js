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
  const newStory = new Story({ ...body });
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
