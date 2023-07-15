import { IAsideItems } from "@/types/IAsideItems";
import AvatarIcon from "@mui/icons-material/Person4";
import ExploreIcon from "@mui/icons-material/Explore";
import AddIcon from "@mui/icons-material/Add";

export const AsideNavbarItems: Array<{
  id: string;
  items: IAsideItems[];
}> = [
  {
    id: crypto.randomUUID(),
    items: [
      {
        id: crypto.randomUUID(),
        title: "Личные сообщения",
        img: AvatarIcon,
        route: "/home",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    items: [],
  },
  {
    id: crypto.randomUUID(),
    items: [
      {
        id: crypto.randomUUID(),
        title: "Найти сервер",
        img: ExploreIcon,
        route: "/home",
      },
      {
        id: crypto.randomUUID(),
        title: "Добавить сервер",
        img: AddIcon,
        route: "/home",
      },
    ],
  },
];
