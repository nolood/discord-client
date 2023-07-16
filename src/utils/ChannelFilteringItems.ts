import { IFilteringItem } from "@/types/IFilteringItem";

export const ChannelsFilteringItems: IFilteringItem[] = [
  {
    id: 1,
    title: "В сети",
    property: "active",
  },
  {
    id: 2,
    title: "Вcе",
    property: "all",
  },
  {
    id: 3,
    title: "Ожидание",
    property: "Waiting",
  },
  {
    id: 4,
    title: "Заблокированные",
    property: "blocked",
  },
];
