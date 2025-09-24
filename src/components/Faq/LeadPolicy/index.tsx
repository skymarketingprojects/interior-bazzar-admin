
import parser from "html-react-parser";
import styles from "./LeadPolicy.module.css";
import useLeadPolicy from "./useLeadPolicy";
const LeadPolicy = () => {
    const { leadPolicy, loading } = useLeadPolicy();
    return (
        <div className={`${styles.leadPolicy}`}>
            {loading ? <div>loading....</div> : parser(leadPolicy)}
        </div>
    )
}
export default LeadPolicy;