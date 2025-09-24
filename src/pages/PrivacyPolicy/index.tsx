import styles from "./PrivacyPolicy.module.css";
import parser from "html-react-parser"
import usePrivacyPolicy from "./usePrivacyPolicy";
const PrivacyPolicy = () => {
    const { loading, privacy } = usePrivacyPolicy();
    return (
        <div className={`container ${styles.container}`}>
            {loading ? <div>loading....</div> : parser(privacy)}
        </div>
    );
};

export default PrivacyPolicy;
