import styles from "./TermsAndConditions.module.css";
import parser from "html-react-parser"
import useTermsAndConditions from "./useTermsAndConditions";
const TermsAndConditions = () => {
    const { loading, termsCondition } = useTermsAndConditions();
    return (
        <div className={`container ${styles.container}`}>
            {loading ? <div>loading....</div> : parser(termsCondition)}
        </div>
    );
};

export default TermsAndConditions;
