import InactiveStatusIcon from '@/components/Channels/Statuses/InactiveStatusIcon'
import OnlineStatusIcon from '@/components/Channels/Statuses/OnlineStatusIcon'
import { UserStatus } from '@/types/entities/UserStatus'

export const StatusIcons = ({ status }: { status: UserStatus }) => {
	if (status === 'online') {
		return <OnlineStatusIcon />
	}

	if (status === 'inactive') {
		return <InactiveStatusIcon />
	}
}
