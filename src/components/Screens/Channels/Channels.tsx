import ChannelsRightSidePanel from '@/components/Common/ChannelsRightSidePanel/ChannelsRightSidePanel';
import TopGroup from '@/components/Common/TopGroup/TopGroup';
import ChannelsTopPanel from '@/components/Screens/Channels/ChannelsTopPanel/ChannelsTopPanel';
import { selectActiveFilterOption } from '@/store/userStore/userSelectors';
import { useUserStore } from '@/store/userStore/userStore';
import ChannelsFriends from './ChannelsFriends/ChannelsFriends';
import ChannelsFriendsAdd from './ChannelsFriends/ChannelsFriendsAdd';

const Channels = () => {
  const activeFilter = useUserStore(selectActiveFilterOption);

  return (
    <div className='flex-grow bg-primaryBg overflow-hidden'>
      <TopGroup>
        <ChannelsTopPanel />
      </TopGroup>
      <div className='flex w-full h-full'>
        <div className='flex-1 w-full pt-4 pb-4 pl-7 pr-7'>
          {activeFilter.id === 5 ? <ChannelsFriendsAdd /> : <ChannelsFriends />}
        </div>
        <ChannelsRightSidePanel />
      </div>
    </div>
  );
};

export default Channels;
