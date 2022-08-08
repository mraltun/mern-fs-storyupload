import React from "react";
import { Layout } from "antd";
import StoryList from "../StoryList";
import StoryForm from "../StoryForm";
import styles from "../../assets/styles/Home.styles";

const { Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Sider style={styles.sider} width={400}>
        <StoryForm />
      </Sider>
      <Content style={styles.content}>
        <StoryList />
      </Content>
    </Layout>
  );
};

export default Home;
