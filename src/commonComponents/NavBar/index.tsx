import React, { FC } from "react";
import { Header } from "antd/es/layout/layout";
import { Menu, Row } from "antd";
import { useHistory } from "react-router-dom";

import { RouteNames } from "../../routes/routesNames";
import { useTypedSelector } from "../../hooks/UseTypedSelector";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../pages/LoginPage/actions";

const NavBar: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuth } = useTypedSelector((state) => state.authReducer);

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                key="1"
                onClick={() => dispatch(AuthActionCreators.logout())}
              >
                Log Out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="1" onClick={() => history.push(RouteNames.LOGIN)}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default NavBar;
