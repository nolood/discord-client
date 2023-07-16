import { IFilteringItem } from "@/types/IFilteringItem";
import { memo, useCallback } from "react";
import styles from "./ChannelsTopPanelItem.module.scss";
import { setClassNameChannelsItems } from "@/utils/setClassNameChannelsItem";

const ChannelsTopPanelItem = memo(function ChannelsTopPanelItem({
  item,
}: {
  item: IFilteringItem;
}) {
  // const btnClassName = useCallback(() => setClassNameChannelsItems(), [second]);

  return (
    <li className={styles.item}>
      <button className={styles.btn}>{item.title}</button>
    </li>
  );
});

export default ChannelsTopPanelItem;
