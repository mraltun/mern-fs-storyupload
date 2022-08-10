import React from "react";
import { Form, Typography, Button, Input, Card, Layout } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../../assets/styles/AuthForm.styles";

const { Title } = Typography;

const AuthForm = () => {
  const user = null;
  const [form] = Form.useForm();

  const handlerFinish = () => {};

  const isLogin = false;

  return (
    <Layout style={styles.container}>
      <Card
        style={styles.card}
        title={
          <Title level={4} style={{ textAlign: "center" }}>
            {isLogin ? "Login" : "Join"} Story Upload
          </Title>
        }
      >
        <Form
          name='authform'
          form={form}
          size='large'
          wrapperCol={{ span: 20, offset: 2 }}
          onFinish={handlerFinish}
        >
          {isLogin || (
            <>
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: "Please enter your username" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder='username' />
              </Form.Item>
            </>
          )}
        </Form>
      </Card>
    </Layout>
  );
};

export default AuthForm;
