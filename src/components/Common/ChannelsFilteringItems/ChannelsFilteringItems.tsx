import { useState } from "react";
import SearchTextField from "../SearchTextField/SearchTextField";
import styles from "./ChannelsFilteringItems.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const ChannelsFilteringItems = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchTextField
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Поиск"
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default ChannelsFilteringItems;
