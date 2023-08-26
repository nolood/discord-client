import { useUserStore } from '@/store/userStore'
import { selectActiveFilterOption } from '@/store/userStore/userSelectors'
import { IFilteringItem } from '@/types/IFilteringItem'
import { memo } from 'react'
import styles from './ChannelsTopPanelItem.module.scss'

const ChannelsTopPanelItem = memo(function ChannelsTopPanelItem({
	item,
}: {
	item: IFilteringItem
}) {
	const activeItem = useUserStore(selectActiveFilterOption)
	const setActiveItem = useUserStore(state => state.setActiveFilterOption)
	const handleSetActiveItem = () => {
		setActiveItem({ property: item.property, id: item.id })
	}
	return (
		<li className={styles.item}>
			<button
				onClick={handleSetActiveItem}
				className={
					item.id === activeItem.id
						? `${styles.btn} ${styles.active}`
						: styles.btn
				}
			>
				{item.title}
			</button>
		</li>
	)
})

export default ChannelsTopPanelItem
