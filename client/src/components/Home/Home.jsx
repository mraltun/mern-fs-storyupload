import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import StoryList from "../StoryList";
import StoryForm from "../StoryForm";
import styles from "../../assets/styles/Home.styles";
import { getStories } from "../../actions/StoryAction";

const { Sider, Content } = Layout;

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <Layout>
      <Sider style={styles.sider} width={400}>
        <StoryForm selectedId={selectedId} setSelectedId={setSelectedId} />
      </Sider>
      <Content style={styles.content}>
        <StoryList setSelectedId={setSelectedId} />
      </Content>
    </Layout>
  );
};

export default Home;
