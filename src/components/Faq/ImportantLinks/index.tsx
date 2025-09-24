import styles from "./ImportantLinks.module.css"
import parser from "html-react-parser";
import useImportantLinks from "./useImportantLinks";
const ImportantLinks = () => {
    const { links, loading } = useImportantLinks();
    return (
        <div className={`${styles.linksContainer}`}>
            {loading ? <div>loading....</div> : parser(links)}
        </div>
    )
}
export default ImportantLinks;