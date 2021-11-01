import React, { FC } from "react";
import { Button, Card, Form, Input } from "antd";

import { rules } from "../../../utils/rules";

interface LoginPageLayoutProps {
  onSubmit: () => void;
  isLoading: boolean;
  error: string;
  username: string;
  setUsername: (string: string) => void;
  password: string;
  setPassword: (string: string) => void;
}

const LoginPageLayout: FC<LoginPageLayoutProps> = ({
  onSubmit,
  isLoading,
  error,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <Card>
      <Form onFinish={onSubmit}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[rules.required("Пожалуйста, введите имя пользователя")]}
        >
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[rules.required("Пожалуйста, введите пароль")]}
        >
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPageLayout;
