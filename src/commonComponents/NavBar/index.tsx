import React, { FC } from "react";
import { Header } from "antd/es/layout/layout";
import { Menu, Row } from "antd";
import { useHistory } from "react-router-dom";

import { RouteNames } from "../../routes/routesNames";

const NavBar: FC = () => {
  const history = useHistory();
  const isAuth = true;

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Irodactyl</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key="1" onClick={() => history.push(RouteNames.LOGIN)}>
                Login
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="1" onClick={() => console.log("LOG OUT!!!")}>
              Log Out
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default NavBar;
