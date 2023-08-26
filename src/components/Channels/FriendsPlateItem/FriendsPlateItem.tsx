import Avatar from '@/components/Common/Avatar/Avatar'
import { Statuses } from '@/consts/Statuses'
import { IFriend } from '@/types/IFriend'
import MessageBtn from '../FriendsButtons/MessageBtn'
import OptionsBtn from '../FriendsButtons/OptionsBtn'

const FriendsPlateItem = ({ user }: { user: IFriend }) => {
	return (
		<div className='p-2 border-solid border-t border-secondaryHover flex items-center hover:bg-secondaryHover rounded-md cursor-pointer justify-between'>
			<div className='flex items-center'>
				<Avatar
					name={user.name}
					size='medium'
					statusBgColor='bg-primaryBg'
					status={user.status}
				/>
				<div className='ml-3'>
					<p className='text-primaryText font-bold'>{user.name}</p>
					<p className='text-secondaryText'>{Statuses[user.status]}</p>
				</div>
			</div>
			<div className='flex items-center gap-3'>
				<MessageBtn />
				<OptionsBtn />
			</div>
		</div>
	)
}

export default FriendsPlateItem
