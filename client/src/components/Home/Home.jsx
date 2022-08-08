import React from "react";
import { Layout } from "antd";
import StoryList from "../StoryList";
import StoryForm from "../StoryForm";

const { Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Sider width={400}>
        <StoryForm />
      </Sider>
      <Content>
        <StoryList />
      </Content>
    </Layout>
  );
};

export default Home;
