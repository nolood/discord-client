import { FetchStatus } from '@/types/entities/FetchStatus'

export const setStatus = (set: any, status: FetchStatus) => {
	set(() => ({ status }))
}
