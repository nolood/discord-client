import FriendsList from '@/components/Channels/FriendsList/FriendsList'
import ChannelsFilteringItems from '@/components/Common/ChannelsFilteringItems/ChannelsFilteringItems'
import ChannelsRightSidePanel from '@/components/Common/ChannelsRightSidePanel/ChannelsRightSidePanel'
import TopGroup from '@/components/Common/TopGroup/TopGroup'
import ChannelsTopPanel from '@/components/Screens/Channels/ChannelsTopPanel/ChannelsTopPanel'

const Channels = () => {
	return (
		<div className='flex-grow bg-primaryBg overflow-hidden'>
			<TopGroup>
				<ChannelsTopPanel />
			</TopGroup>
			<div className='flex w-full h-full'>
				<div className='flex-1 w-full pt-4 pb-4 pl-7 pr-7'>
					<ChannelsFilteringItems />
					<FriendsList />
				</div>
				<ChannelsRightSidePanel />
			</div>
		</div>
	)
}

export default Channels
