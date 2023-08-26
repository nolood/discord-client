import MoreVertIcon from '@mui/icons-material/MoreVert'
import Tooltip from '@mui/material/Tooltip'
const OptionsBtn = () => {
	return (
		<Tooltip title='Ещё' arrow placement='top'>
			<button className='rounded-full w-9 h-9 bg-darkText text-secondaryText hover:text-primaryText hover:text-primaryText hover:bg-primaryHover'>
				<MoreVertIcon />
			</button>
		</Tooltip>
	)
}

export default OptionsBtn
