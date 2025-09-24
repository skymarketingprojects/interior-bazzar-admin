import styles from "./CtaIcons.module.css"
import MessageBot from "../Bot/Messages";
import WhatsappBot from "../Bot/WhatsappBot";
import EmailBot from "../Bot/EmailBot";
const CtaIcons = () => {
    return (
        <div className={styles.iconsContainer}>
            <MessageBot />
            <WhatsappBot />
            <EmailBot />
        </div>
    )
}
export default CtaIcons;