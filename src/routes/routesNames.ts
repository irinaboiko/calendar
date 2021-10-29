import React from "react";

import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import EventPageContainer from "../pages/EventPage/containers/EventPageContainer";

export interface IRout {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRout[] = [
  { path: RouteNames.LOGIN, exact: true, component: LoginPageContainer },
];

export const privateRoutes: IRout[] = [
  { path: RouteNames.EVENT, exact: true, component: EventPageContainer },
];
