import styles from "./EmailBot.module.css";
import { STATIC_ICONS } from "../../../../utils/constants/image";
import { CONTACTS } from "../../../../utils/constants/contact";
const EmailBot = () => {
    const handleClick = () => {
        window.open(`mailto:${CONTACTS.EMAIL}`);
    }
    return (
        <div
            onClick={handleClick}
            className={`${styles.oneIconContainer}`}
        >
            <img className={`${styles.oneIcon} ${styles.email}`} src={STATIC_ICONS.EMAILICON} alt="facebook" />
        </div>
    );
}
export default EmailBot;