import { ChannelsPage, ServersPage } from "@/pages";
import { CHANNEL_ROUTE, SERVER_ROUTE } from "@/utils/const";

export const authRoutes = [
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
