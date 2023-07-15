import { ReactNode } from "react";
import styles from "./AsideNavbarGroup.module.scss";

const AsideNavbarGroup = ({ children }: { children: ReactNode }) => {
  return <div className={styles.group}>{children}</div>;
};

export default AsideNavbarGroup;
