import DisturbStatusIcon from '@/components/Channels/Statuses/DisturbStatusIcon'
import InactiveStatusIcon from '@/components/Channels/Statuses/InactiveStatusIcon'
import OfflineStatusIcon from '@/components/Channels/Statuses/OfflineStatusIcon'
import OnlineStatusIcon from '@/components/Channels/Statuses/OnlineStatusIcon'
import { UserStatus } from '@/types/entities/UserStatus'

export const StatusIcons = ({ status }: { status: UserStatus }) => {
	if (status === 'online') {
		return <OnlineStatusIcon />
	}

	if (status === 'inactive') {
		return <InactiveStatusIcon />
	}

	if (status === 'disturb') {
		return <DisturbStatusIcon />
	}

	if (status === 'offline' || status === 'invisible') {
		return <OfflineStatusIcon />
	}

	return <OfflineStatusIcon />
}
