import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import Story from "../Story";

const StoryList = () => {
  const stories = useSelector((state) => state.stories);

  return !stories.length ? (
    <div style={{ textAlign: "center" }}>
      <Spin size='large' />
    </div>
  ) : (
    <Row gutter={[48, 32]}>
      {stories.map((story) => {
        return (
          <Col key={story._id} lg={24} xl={12} xxl={8}>
            <Story story={story} />
          </Col>
        );
      })}
    </Row>
  );
};

export default StoryList;
