import { IAsideItems } from "@/types/IAsideItems";
import styles from "./PanelItem.module.scss";
import { useLocation } from "react-router-dom";
import { setClassNameChannelsItems } from "@/utils/setClassNameChannelsItem";
import { memo, useMemo } from "react";

const PanelItem = memo(function PanelItem({ item }: { item: IAsideItems }) {
  const location = useLocation();
  const btnClassName = useMemo(
    () =>
      setClassNameChannelsItems(
        location.pathname,
        item.route,
        styles.btn,
        styles.active
      ),
    [location.pathname, item]
  );
  return (
    <button className={btnClassName}>
      <item.img />
      {item.title}
    </button>
  );
});

export default PanelItem;
