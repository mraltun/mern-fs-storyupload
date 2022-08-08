import React from "react";
import { Card, Form, Input, Typography, Button } from "antd";
import styles from "../../assets/styles/StoryForm.styles";

const { Title } = Typography;

const StoryForm = () => {
  const { form } = Form.useForm;
  const onSubmit = () => {};

  return (
    <Card
      style={styles.formCard}
      title={<Title level={4} style={styles.formTitle}></Title>}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout='horizontal'
        size='middle'
        onFinish={onSubmit}
      >
        <Form.Item
          name='username'
          label='Username'
          rules={[{ required: true }]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item name='caption' label='Caption' rules={[{ required: true }]}>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
        <Form.Item name='tags' label='Tags'>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default StoryForm;
