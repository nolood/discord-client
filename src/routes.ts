import { ChannelsPage, LoginPage, RegisterPage, ServersPage } from "@/pages";
import {
  CHANNEL_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SERVER_ROUTE,
} from "@/utils/const";

export const authRoutes: Array<{ path: string; Component: () => JSX.Element }> =
  [
    {
      path: CHANNEL_ROUTE,
      Component: ChannelsPage,
    },
    {
      path: CHANNEL_ROUTE + "/:id",
      Component: ChannelsPage,
    },
    {
      path: SERVER_ROUTE + "/:id",
      Component: ServersPage,
    },
  ];

export const publicRoutes: Array<{
  path: string;
  Component: () => JSX.Element;
}> = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
];
