import SearchIcon from "../Icons/SearchIcon";
import styles from "./SearchInput.module.css";

function SearchInput() {
  return (
    <div className={styles.inputContainer}>
      <div className="container">
        <form action="#">
          <div className={styles.inputBox}>
            <button type="submit" className={styles.submitButton}>
              <SearchIcon width={20} height={20} color="currentColor" />
            </button>
            <input type="text" name="q" placeholder="Search menu items" className={styles.searchInput} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchInput;
