import React from "react";
import Home from "./components/Home";
import AppBar from "./components/AppBar/AppBar";
import { Layout } from "antd";
import styles from "./assets/styles/App.styles";

const { Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <AppBar />
      <Home />
      <Footer style={styles.footer}>Story Upload App 2022</Footer>
    </Layout>
  );
};

export default App;
