import { IAsideItems } from "@/types/IAsideItems";
import styles from "./PanelItem.module.scss";
import { useLocation } from "react-router-dom";

const PanelItem = ({ item }: { item: IAsideItems }) => {
  const location = useLocation();
  const btnClass =
    location.pathname === item.route
      ? `${styles.btn} ${styles.active}`
      : `${styles.btn}`;
  return (
    <button className={btnClass}>
      <item.img />
      {item.title}
    </button>
  );
};

export default PanelItem;
