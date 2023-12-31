import FriendIcon from "@mui/icons-material/Group";
import styles from "./ChannelsTopPanel.module.scss";
import ChannelsTopPanelItem from "../ChannelsTopPaneItem/ChannelsTopPanelItem";
import { ChannelsFilteringItems } from "@/utils/ChannelFilteringItems";
import ChannelsFriendAddBtn from "@/components/Screens/Channels/ChannelsFriendAddBtn/ChannelsFriendAddBtn";

const ChannelsTopPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.friends}>
        <FriendIcon /> Друзья
      </div>
      <ul className={styles.list}>
        {ChannelsFilteringItems.map((item) => (
          <ChannelsTopPanelItem key={item.id} item={item} />
        ))}
      </ul>
      <ChannelsFriendAddBtn />
    </div>
  );
};

export default ChannelsTopPanel;
