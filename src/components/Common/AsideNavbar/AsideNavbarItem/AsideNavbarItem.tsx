import { IAsideItems } from "@/types/IAsideItems";
import styles from "../AsideNavbar.module.scss";
import { useLocation } from "react-router-dom";
import { setClassNameChannelsItems } from "@/utils/funcs/setClassNameChannelsItem";
import { memo, useMemo } from "react";

const AsideNavbarItem = memo(function AsideNavbarItem({
  item,
}: {
  item: IAsideItems;
}) {
  const location = useLocation();
  const btnClassName = useMemo(
    () =>
      setClassNameChannelsItems(
        location.pathname,
        item.route,
        styles.item,
        styles.active
      ),
    [location.pathname, item]
  );
  return (
    <button className={btnClassName}>
      <item.img fontSize="medium" />
      <div className={styles.tooltip}>
        <div></div>
        {item.title}
      </div>
    </button>
  );
});

export default AsideNavbarItem;
