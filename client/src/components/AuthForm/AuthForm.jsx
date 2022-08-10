import React, { useState } from "react";
import { Form, Typography, Button, Input, Card, Layout } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../../assets/styles/AuthForm.styles";

const { Title } = Typography;

const AuthForm = () => {
  const user = null;
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);

  const handleFinish = () => {};

  const handleClick = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <Layout style={styles.container}>
      <Card
        style={styles.card}
        title={
          <Title level={4} style={{ textAlign: "center" }}>
            {isLogin ? "Login" : "Join"} to Story Upload
          </Title>
        }
      >
        <Form
          name='authform'
          form={form}
          size='large'
          wrapperCol={{ span: 20, offset: 2 }}
          onFinish={handleFinish}
        >
          {isLogin || (
            <>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: "Please enter your username" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder='Username' />
              </Form.Item>
            </>
          )}
          <Form.Item
            name='email'
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input prefix={<MailOutlined />} placeholder='Email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              type='password'
              prefix={<LockOutlined />}
              placeholder='Password'
            />
          </Form.Item>
          {isLogin || (
            <Form.Item
              name='confirmPassword'
              rules={[
                { required: true, message: "Please repeat your password" },
              ]}
            >
              <Input.Password
                type='password'
                prefix={<LockOutlined />}
                placeholder='Confirm Password'
              />
            </Form.Item>
          )}
          <Form.Item>
            <Button htmlType='submit' typeof='primary'>
              {isLogin ? "Login" : "Join"}
            </Button>
            <span style={{ margin: "0 10px 20px 0" }}>Or</span>
            <Button type='link' onClick={handleClick}>
              {isLogin ? "Register" : "Have an account?"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default AuthForm;
