import { StatusIcons } from '@/consts/StatusIcons'
import { UserStatus } from '@/types/entities/UserStatus'
import { genAvatarColor } from '@/utils/funcs/genAvatarColor'

const Avatar = ({
	name,
	size,
	statusBgColor,
	status,
}: {
	name: string
	size: 'small' | 'medium' | 'large'
	statusBgColor: string
	status: UserStatus
}) => {
	const pixelsSize = {
		small: '30px',
		medium: '40px',
		large: '50px',
	}
	const fontSize = {
		small: '15px',
		medium: '20px',
		large: '30px',
	}
	return (
		<div
			className='rounded-full flex items-center justify-center text-primaryText relative'
			style={{
				backgroundColor: genAvatarColor(name),
				width: pixelsSize[size],
				height: pixelsSize[size],
				fontSize: fontSize[size],
			}}
		>
			{name[0]}
			<div
				className={`absolute w-4 h-4 rounded-full right-[-3px] bottom-[-3px] ${statusBgColor} flex items-center justify-center`}
			>
				<StatusIcons status={status} />
			</div>
		</div>
	)
}

export default Avatar

Avatar.defaultProps = {
	size: 'medium',
}
