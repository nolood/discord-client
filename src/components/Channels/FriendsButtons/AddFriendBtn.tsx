import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Tooltip } from '@mui/material';
const AddFriendBtn = () => {
  return (
    <Tooltip title='Добавить в друзья' arrow placement='top'>
      <button className='rounded-full w-9 h-9 bg-darkText text-secondaryText hover:text-primaryText hover:bg-primaryHover'>
        <PersonAddIcon sx={{ width: 20 }} />
      </button>
    </Tooltip>
  );
};

export default AddFriendBtn;
