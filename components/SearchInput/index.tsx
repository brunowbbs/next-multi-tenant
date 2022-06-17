import { useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "./searchIcon.svg";

type Props = {
  mainColor: string;

  onSearch: (searchValue: string) => void;
};

export function SearchInput({ mainColor, onSearch }: Props) {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleInputFocus() {
    setFocused(true);
  }

  function handleInputBlur() {
    setFocused(false);
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  }

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? mainColor : "#ffffff" }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <SearchIcon color={mainColor} />
      </div>
      <input
        className={styles.input}
        placeholder="Digite o nome do produto"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
