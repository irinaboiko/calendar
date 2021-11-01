import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect } from "react";

import NavBar from "./commonComponents/NavBar";
import Routes from "./routes/Routes";

import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <NavBar />
      <Content>
        <Routes />
      </Content>
    </Layout>
  );
};

export default App;
