import React, { FC, useState } from "react";
import { Layout, Row } from "antd";

import LoginPageLayout from "../components/LoginPageLayout";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../actions";
import { useTypedSelector } from "../../../hooks/UseTypedSelector";

const LoginPageContainer: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useTypedSelector((state) => state.authReducer);

  const onSubmit = () => {
    dispatch(AuthActionCreators.login(username, password));
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
