import UsersPlateItem from '@/components/Channels/UsersPlateItem/UsersPlateItem';
import SearchTextField from '@/components/Common/SearchTextField/SearchTextField';
import {
  selectGetUsersByNickname,
  selectSetUsers,
  selectUsers,
} from '@/store/userStore/userSelectors';
import { useUserStore } from '@/store/userStore/userStore';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import styles from './../Channels.module.scss';

const ChannelsFriendsAdd = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const users = useUserStore(selectUsers);
  const setUsers = useUserStore(selectSetUsers);
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

  useEffect(() => {
    search('');
    return () => {
      setUsers([]);
    };
  }, []);

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
