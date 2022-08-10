import React from "react";
import { Link } from "react-router-dom";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import Logo from "../../assets/Logo.png";
import styles from "../../assets/styles/AppBar.styles";

const { Title } = Typography;
const { Header } = Layout;

const AppBar = () => {
  const user = null;

  return (
    <Header style={styles.header}>
      <Link to='/'>
        <div style={styles.homeLink}>
          <Image style={styles.image} width='45' preview='false' src={Logo} />
          &nbsp;
          <Title style={styles.title}>Story Upload App</Title>
        </div>
      </Link>
      {!user ? (
        <Link to='/authform'>
          <Button htmlType='button' style={styles.login}>
            Login
          </Button>
        </Link>
      ) : (
        <div style={styles.userInfo}>
          <Avatar style={styles.avatar} alt='username' size='large'>
            U
          </Avatar>
          <Title style={styles.title} level={4}>
            John Doe
          </Title>
          <Button htmlType='button'>Logout</Button>
        </div>
      )}
    </Header>
  );
};

export default AppBar;
