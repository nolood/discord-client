import { ReactNode } from "react";
import styles from "./TopGroup.module.scss";

const TopGroup = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default TopGroup;
