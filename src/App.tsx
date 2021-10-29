import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { FC } from "react";

import NavBar from "./commonComponents/NavBar";
import Routes from "./routes/Routes";

import "./App.css";

const App: FC = () => {
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
