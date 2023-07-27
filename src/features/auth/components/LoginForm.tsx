import { Button, Card, Form, Input } from "antd";
import styles from "./LoginForm.module.css";
import { useLoginCallback } from "../hooks/useLoginCallback";

const LoginForm: React.FC = () => {
  const loginCallback = useLoginCallback();

  return (
    <div className={styles.loginContainer}>
      <Card title="Login" style={{ width: 300 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={(values) => loginCallback(values.email, values.password)}
          onFinishFailed={(errorInfo: any) => {}}
          autoComplete="off"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export { LoginForm };
