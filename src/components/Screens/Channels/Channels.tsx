import { useParams } from "react-router-dom";
import styles from "./Channels.module.scss";
import TopGroup from "@/components/Common/TopGroup/TopGroup";
import ChannelsTopPanel from "@/components/Screens/Channels/ChannelsTopPanel/ChannelsTopPanel";

const Channels = () => {
  const params = useParams();
  return (
    <div className={styles.container}>
      <TopGroup>
        <ChannelsTopPanel />
      </TopGroup>
      <div></div>
    </div>
  );
};

export default Channels;
