import FriendsList from '@/components/Channels/FriendsList/FriendsList'
import SearchTextField from '@/components/Common/SearchTextField/SearchTextField'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import styles from './../Channels.module.scss'

const ChannelsFriends = () => {
	const [searchValue, setSearchValue] = useState<string>('')

	return (
		<>
			<div className={styles.search}>
				<SearchTextField
					value={searchValue}
					setValue={setSearchValue}
					placeholder='Поиск'
				/>
				<SearchIcon />
			</div>
			<FriendsList />
		</>
	)
}

export default ChannelsFriends
