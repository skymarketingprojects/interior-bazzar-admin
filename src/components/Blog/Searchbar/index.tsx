import { Input, SearchIcon } from "../../ui";
import styles from "./BlogSearchBar.module.css";
import useBlogSearchBar from "./useBlogSearchBar";
const BlogSearchBar = () => {
    const { searchTerm, handleSearchChange, handleSubmit } = useBlogSearchBar();
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
export default BlogSearchBar;