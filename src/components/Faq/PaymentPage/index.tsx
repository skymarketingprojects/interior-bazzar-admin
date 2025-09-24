
import parser from "html-react-parser";
import styles from "./PaymentPage.module.css";
import usePaymentPage from "./usePaymentPage";
const PaymentPage = () => {
    const { payement, loading } = usePaymentPage();
    return (
        <div className={`${styles.paymentContainer}`}>
            {loading ? <div>loading....</div> : parser(payement)}
        </div>
    )
}
export default PaymentPage;