import { IAsideItems } from "@/types/IAsideItems";
import styles from "../AsideNavbar.module.scss";
import { useLocation } from "react-router-dom";
import { setClassNameChannelsItems } from "@/utils/setClassNameChannelsItem";

const AsideNavbarItem = ({ item }: { item: IAsideItems }) => {
  const location = useLocation();
  const btnClassName = setClassNameChannelsItems(
    location.pathname,
    item.route,
    styles.item,
    styles.active
  );
  console.log(btnClassName);
  return (
    <button className={btnClassName}>
      <item.img fontSize="medium" />
    </button>
  );
};

export default AsideNavbarItem;
