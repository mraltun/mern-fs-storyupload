import React from "react";
import { useSelector } from "react-redux";
import { Row } from "antd";
import Story from "../Story";

const StoryList = () => {
  const stories = useSelector((state) => state.stories);
  return (
    <Row gutter={[48, 32]}>
      <Story />
      <Story />
    </Row>
  );
};

export default StoryList;
