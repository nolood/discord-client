import { IAsideItems } from '@/types/IAsideItems'
import AddIcon from '@mui/icons-material/Add'
import ExploreIcon from '@mui/icons-material/Explore'
import AvatarIcon from '@mui/icons-material/Person4'
import { CHANNEL_ROUTE, SERVER_ROUTE } from '../consts/PathsRoutes'

export const AsideNavbarItems: Array<{
	id: string
	items: IAsideItems[]
}> = [
	{
		id: crypto.randomUUID(),
		items: [
			{
				id: crypto.randomUUID(),
				title: 'Личные сообщения',
				img: AvatarIcon,
				route: CHANNEL_ROUTE,
			},
		],
	},
	{
		id: crypto.randomUUID(),
		items: [],
	},
	{
		id: crypto.randomUUID(),
		items: [
			{
				id: crypto.randomUUID(),
				title: 'Найти сервер',
				img: ExploreIcon,
				route: SERVER_ROUTE,
			},
			{
				id: crypto.randomUUID(),
				title: 'Добавить сервер',
				img: AddIcon,
				route: SERVER_ROUTE,
			},
		],
	},
]
