import React from "react";
import { AsideNavbarItems } from "@/utils/AsideNavbarItems";
import styles from "./AsideNavbar.module.scss";
import AsideNavbarGroup from "./AsideNavbarGroup/AsideNavbarGroup";
import AsideNavbarItem from "./AsideNavbarItem/AsideNavbarItem";

const AsideNavbar = () => {
  return (
    <div className={styles.container}>
      {AsideNavbarItems.map((group) => (
        <React.Fragment key={group.id}>
          {group.items.length > 0 && (
            <AsideNavbarGroup>
              {group.items.map((item) => (
                <AsideNavbarItem key={item.id} item={item} />
              ))}
            </AsideNavbarGroup>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AsideNavbar;
