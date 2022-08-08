import React from "react";
import { Layout, Image, Typography } from "antd";
import Logo from "./assets/Logo.png";
import Home from "./components/Home";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout>
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
