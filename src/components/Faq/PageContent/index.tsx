import parser from "html-react-parser";
import usePageContent from "./usePageContent";
import styles from "./PageContent.module.css";

interface PageContentProps {
    fetchFn: () => Promise<any>;
    className?: string;
}

const PageContent = ({ fetchFn, className }: PageContentProps) => {
    const { loading, content } = usePageContent(fetchFn);

    return (
        <div className={`${styles.pageContainer} ${className || ""}`}>
            {loading ? <div>loading....</div> : parser(content)}
        </div>
    );
};

export default PageContent;
