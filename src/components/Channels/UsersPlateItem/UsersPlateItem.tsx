import Avatar from '@/components/Common/Avatar/Avatar';
import { Statuses } from '@/consts/Statuses';
import { IUser } from '@/types/entities/IUser';
import { motion } from 'framer-motion';
import AddFriendBtn from '../FriendsButtons/AddFriendBtn';

const UsersPlateItem = ({ user, index }: { user: IUser; index: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: 'tween',
        duration: 1,
        delay: index * 0.05,
      }}
      className='p-2 border-solid border-t border-secondaryHover flex items-center hover:bg-secondaryHover rounded-md cursor-pointer justify-between'
    >
      <div className='flex items-center'>
        <Avatar
          name={user.nickname}
          size='medium'
          statusBgColor='bg-primaryBg'
          status={user.status}
        />
        <div className='ml-3'>
          <p className='text-primaryText font-bold'>{user.nickname}</p>
          <p className='text-secondaryText'>{Statuses[user.status]}</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <AddFriendBtn />
      </div>
    </motion.div>
  );
};

export default UsersPlateItem;
