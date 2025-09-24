import styles from "./ChatBot.module.css"
import { STATIC_ICONS } from "../../../../utils/constants/image";
const ChatBot = ({ onClick }: { onClick?: () => void },) => {
    return (
        <div
            onClick={onClick}
            className={`${styles.oneIconContainer}`}
        >
            <img className={`${styles.oneIcon} ${styles.chatbot}`} src={STATIC_ICONS.CHATBOTICON} alt="facebook" />
        </div>
    );
}
export default ChatBot;