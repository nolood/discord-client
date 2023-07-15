import { IAsideNavbarItem } from "@/types/IAsideNavbarItem";
import styles from "../AsideNavbar.module.scss";

const AsideNavbarItem = ({ item }: { item: IAsideNavbarItem }) => {
  return (
    <button className={styles.item}>
      <item.img fontSize="medium" />
    </button>
  );
};

export default AsideNavbarItem;
