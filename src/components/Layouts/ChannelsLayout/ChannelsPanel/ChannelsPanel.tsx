import TopGroup from "@/components/Common/TopGroup/TopGroup";
import styles from "./ChannelsPanel.module.scss";
import { ChannelsPanelItems } from "@/utils/ChannelsPanelItems";
import PanelItem from "./PanelItem/PanelItem";

const ChannelsPanel = () => {
  return (
    <div className={styles.wrapper}>
      <TopGroup>
        <button className={styles.btn}>Найти или начать беседу</button>
      </TopGroup>
      <ul className={styles.list}>
        {ChannelsPanelItems.map((item) => (
          <PanelItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ChannelsPanel;
