import AsideNavbar from "@/components/Common/AsideNavbar/AsideNavbar";
import styles from "./ChannelsLayout.module.scss";
import { ReactNode } from "react";
import ChannelsPanel from "./ChannelsPanel/ChannelsPanel";

const ChannelsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <AsideNavbar />
      <div className={styles.container}>
        <ChannelsPanel />
        {children}
      </div>
    </div>
  );
};

export default ChannelsLayout;
