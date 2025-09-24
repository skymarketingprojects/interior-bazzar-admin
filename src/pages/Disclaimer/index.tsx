import parser from "html-react-parser"
import styles from "./Disclaimer.module.css";
import useDisclaimer from "./useDisclaimer";

const Disclaimer = () => {
    const { loading, disclaimer } = useDisclaimer();
    return (
        <div className={`container ${styles.container}`}>
            {loading ? <div>loading....</div> : parser(disclaimer)}
        </div>
    );
};

export default Disclaimer;
