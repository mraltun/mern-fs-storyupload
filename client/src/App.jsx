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
      <Header>
        <Image width='45' preview='false' src={Logo} />
        &nbsp;
        <Title>Story Upload App</Title>
      </Header>
      <Home />
      <Footer>Story Upload App 2022</Footer>
    </Layout>
  );
};

export default App;
