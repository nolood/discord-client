import { useUserStore } from "@/store/userStore";
import { selectActiveFilterOption } from "@/store/userStore/userSelectors";
import styles from "./ChannelsFriendAddBtn.module.scss";

const ChannelsFriendAddBtn = () => {
  const activeItem = useUserStore(selectActiveFilterOption);
  const setActiveItem = useUserStore((state) => state.setActiveFilterOption);
  const handleSetActiveItem = () => {
    setActiveItem({ ...activeItem, id: 5 });
  };
  return (
    <button
      onClick={handleSetActiveItem}
      className={activeItem.id === 5 ? styles.active : styles.btn}
    >
      Добавить в друзья
    </button>
  );
};

export default ChannelsFriendAddBtn;
