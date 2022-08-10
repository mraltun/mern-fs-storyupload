import React from "react";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import Logo from "../../assets/Logo.png";
import styles from "../../assets/styles/AppBar.styles";

const { Title } = Typography;
const { Header } = Layout;

const AppBar = () => {
  return (
    <Header style={styles.header}>
      <Image style={styles.image} width='45' preview='false' src={Logo} />
      &nbsp;
      <Title style={styles.title}>Story Upload App</Title>
    </Header>
  );
};

export default AppBar;
