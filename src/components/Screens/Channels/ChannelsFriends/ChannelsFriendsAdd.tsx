import UsersPlateItem from '@/components/Channels/UsersPlateItem/UsersPlateItem';
import SearchTextField from '@/components/Common/SearchTextField/SearchTextField';
import { useUserStore } from '@/store/userStore';
import { selectGetUsersByNickname, selectUsers } from '@/store/userStore/userSelectors';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from '@mui/material';
import { useCallback, useState } from 'react';
import styles from './../Channels.module.scss';

const ChannelsFriendsAdd = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const users = useUserStore(selectUsers);
  const search = useUserStore(selectGetUsersByNickname);
  const updateSearchValue = useCallback(
    debounce((value) => {
      search(value);
    }, 500),
    [],
  );
  const onSearch = (value: string) => {
    setSearchValue(value);
    updateSearchValue(value);
  };

  return (
    <div>
      <div className={styles.search}>
        <SearchTextField value={searchValue} setValue={onSearch} placeholder='Поиск' />
        <SearchIcon />
      </div>
      <div className='mt-6'>
        {users.map((item, index) => (
          <UsersPlateItem key={item.id} user={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ChannelsFriendsAdd;
