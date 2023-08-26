import Brightness3Icon from '@mui/icons-material/Brightness3'

const InactiveStatusIcon = () => {
	return (
		<div
			style={{
				color: 'rgb(184, 140, 7)',
			}}
		>
			<Brightness3Icon
				sx={{ width: 14, transform: 'rotate(45deg)', mb: '3px', ml: '1px' }}
			/>
		</div>
	)
}

export default InactiveStatusIcon
