import { UserStatus } from './entities/UserStatus'

export interface IFriend {
	id: number
	name: string
	status: UserStatus
	avatar: string | null
}
