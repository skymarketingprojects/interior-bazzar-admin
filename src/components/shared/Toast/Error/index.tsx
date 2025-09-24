import { STATIC_IMAGES } from "../../../../utils/constants/image";
import styles from "./Error.module.css"
const Error = () => {
    return (
        <div className={styles.container}>
            <img src={STATIC_IMAGES.REDTICK} alt="Error" className={styles.icon} />
            <h2 className={styles.title}>Oppss...</h2>
            <p className={styles.subtitle}>
                Your Subscription request has been submitted
            </p>
            <p className={styles.message}>
                Our sales team will send you the activation message shortly
            </p>
        </div>
    )
}
export default Error;