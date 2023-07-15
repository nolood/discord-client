import { IAsideItems } from "@/types/IAsideItems";
import styles from "./PanelItem.module.scss";
import { useLocation } from "react-router-dom";
import { setClassNameChannelsItems } from "@/utils/setClassNameChannelsItem";

const PanelItem = ({ item }: { item: IAsideItems }) => {
  const location = useLocation();
  const btnClassName = setClassNameChannelsItems(
    location.pathname,
    item.route,
    styles.btn,
    styles.active
  );
  return (
    <button className={btnClassName}>
      <item.img />
      {item.title}
    </button>
  );
};

export default PanelItem;
