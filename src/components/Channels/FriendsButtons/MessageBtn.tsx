import MessageIcon from '@mui/icons-material/Message'
import Tooltip from '@mui/material/Tooltip'
const MessageBtn = () => {
	return (
		<Tooltip title='Сообщениe' arrow placement='top'>
			<button className='rounded-full w-9 h-9 bg-darkText text-secondaryText hover:text-primaryText hover:bg-primaryHover'>
				<MessageIcon sx={{ width: 20 }} />
			</button>
		</Tooltip>
	)
}

export default MessageBtn
