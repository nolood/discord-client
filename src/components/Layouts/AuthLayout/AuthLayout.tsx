import { ReactNode } from "react";
import styles from "./AuthLayout.module.scss";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthLayout;
