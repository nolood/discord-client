import { IAsideItems } from "@/types/IAsideItems";
import { CHANNEL_ROUTE, STORE_ROUTE } from "./const";
import StoreImg from "@mui/icons-material/StoreMallDirectory";
import FriendImg from "@mui/icons-material/Group";

export const ChannelsPanelItems: IAsideItems[] = [
  {
    id: crypto.randomUUID(),
    title: "Друзья",
    route: CHANNEL_ROUTE,
    img: FriendImg,
  },
  {
    id: crypto.randomUUID(),
    title: "Nitro",
    route: STORE_ROUTE,
    img: StoreImg,
  },
];
