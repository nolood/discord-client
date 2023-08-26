import { MockFriends as friends } from '@/consts/MockFriends'
import FriendsPlateItem from '../FriendsPlateItem/FriendsPlateItem'
const FriendsList = () => {
	return (
		<div className='w-full mt-3'>
			<p className='text-secondaryText uppercase font-medium text-sm mb-6'>
				В сети - 2
			</p>
			<div>
				{friends.map(item => (
					<FriendsPlateItem user={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default FriendsList
