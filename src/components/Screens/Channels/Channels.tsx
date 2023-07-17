import ChannelsFilteringItems from "@/components/Common/ChannelsFilteringItems/ChannelsFilteringItems";
import styles from "./Channels.module.scss";
import TopGroup from "@/components/Common/TopGroup/TopGroup";
import ChannelsTopPanel from "@/components/Screens/Channels/ChannelsTopPanel/ChannelsTopPanel";
import ChannelsRightSidePanel from "@/components/Common/ChannelsRightSidePanel/ChannelsRightSidePanel";

const Channels = () => {
  return (
    <div className={styles.container}>
      <TopGroup>
        <ChannelsTopPanel />
      </TopGroup>
      <div className={styles.wrapper}>
        <ChannelsFilteringItems />
        <ChannelsRightSidePanel />
      </div>
    </div>
  );
};

export default Channels;
