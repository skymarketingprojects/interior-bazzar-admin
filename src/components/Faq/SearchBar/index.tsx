import { Input, SearchIcon } from "../../ui";
import styles from "./SearchBar.module.css"
import useSearchBar from "./useSearchBar";
const SearchBar = () => {
    const { searchTerm, handleSearchChange, handleSubmit } = useSearchBar();
    return (
        <form onSubmit={handleSubmit} className={`${styles.searchContainer}`}>
            <Input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className={`${styles.searchInput}`}
            />
            <button type="submit">
                <SearchIcon className={`${styles.searchIcon}`} />
            </button>
        </form>
    )
};

export default SearchBar;
