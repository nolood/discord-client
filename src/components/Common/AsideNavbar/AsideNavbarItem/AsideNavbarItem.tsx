import { IAsideItems } from "@/types/IAsideItems";
import styles from "../AsideNavbar.module.scss";

const AsideNavbarItem = ({ item }: { item: IAsideItems }) => {
  return (
    <button className={styles.item}>
      <item.img fontSize="medium" />
    </button>
  );
};

export default AsideNavbarItem;
