import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import StoryList from "../StoryList";
import StoryForm from "../StoryForm";
import styles from "../../assets/styles/Home.styles";
import { getStories } from "../../actions/StoryAction";

const { Sider, Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

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
