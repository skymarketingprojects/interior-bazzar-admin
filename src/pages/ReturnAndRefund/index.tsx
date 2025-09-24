import styles from "./ReturnAndRefund.module.css";
import parser from "html-react-parser"
import useReturnAndRefund from "./useReturnAndRefund";
const ReturnAndRefund = () => {
    const { loading, returnRefund } = useReturnAndRefund();
    return (
        <div className={`container ${styles.container}`}>
            {loading ? <div>loading....</div> : parser(returnRefund)}
        </div>
    );
};

export default ReturnAndRefund;
