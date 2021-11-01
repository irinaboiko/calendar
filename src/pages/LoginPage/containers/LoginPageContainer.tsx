import React, { FC, useState } from "react";
import { Layout, Row } from "antd";

import LoginPageLayout from "../components/LoginPageLayout";
import { useTypedSelector } from "../../../hooks/UseTypedSelector";
import { useActions } from "../../../hooks/useActions";

const LoginPageContainer: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();
  const { isLoading, error } = useTypedSelector((state) => state.authReducer);

  const onSubmit = () => {
    login(username, password);
  };

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <LoginPageLayout
          onSubmit={onSubmit}
          isLoading={isLoading}
          error={error}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      </Row>
    </Layout>
  );
};

export default LoginPageContainer;
