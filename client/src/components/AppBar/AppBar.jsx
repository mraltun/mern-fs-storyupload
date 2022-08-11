import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import Logo from "../../assets/Logo.png";
import styles from "../../assets/styles/AppBar.styles";

const { Title } = Typography;
const { Header } = Layout;

const AppBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleClick = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

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
            {user?.result?.username?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Title style={styles.title} level={4}>
            {user?.result?.username}
          </Title>
          <Button onClick={handleClick} htmlType='button'>
            Logout
          </Button>
        </div>
      )}
    </Header>
  );
};

export default AppBar;
