import styles from './ChannelsRightSidePanel.module.scss'

const ChannelsRightSidePanel = () => {
	return (
		<div className='flex flex-1 border-l-[1px] border-solid border-secondaryHover p-4 flex-col max-w-[400px]'>
			<h2 className={styles.title}>Активные контакты</h2>
			<div className='w-full flex items-center justify-center flex-col'>
				<span className='text-primaryText text-md font-bold mt-7'>
					Пока что тут тихо...
				</span>
				<p className='text-center text-secondaryText'>
					Если ваш друг начнёт чем-то заниматься - например, запустит игру или
					войдёт в голосовой чат, - вы увидите это здесь
				</p>
			</div>
		</div>
	)
}

export default ChannelsRightSidePanel
