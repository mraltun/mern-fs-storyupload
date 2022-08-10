import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm/AuthForm";
import AppBar from "./components/AppBar/AppBar";
import { Layout } from "antd";
import styles from "./assets/styles/App.styles";

const { Footer } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={styles.layout}>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/authform' element={<AuthForm />} />
        </Routes>
        <Footer style={styles.footer}>Story Upload App 2022</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
