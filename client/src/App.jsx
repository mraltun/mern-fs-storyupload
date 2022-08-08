import React from "react";
import Home from "./components/Home";
import Logo from "./assets/Logo.png";
import { Layout, Image, Typography } from "antd";
import styles from "./assets/styles/App.styles";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width='45' preview='false' src={Logo} />
        &nbsp;
        <Title style={styles.title}>Story Upload App</Title>
      </Header>
      <Home />
      <Footer style={styles.footer}>Story Upload App 2022</Footer>
    </Layout>
  );
};

export default App;
