import { STATIC_IMAGES } from "../../../../utils/constants/image";
import styles from "./Thanks.module.css";
import { Button, ShareIcon } from "../../../ui";
const Thanks = () => {
    const imagePath = STATIC_IMAGES.GREENTICK;
    const onShare = () => { }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Thankyou for feedback</h2>

            <img src={imagePath} alt="Success" className={styles.icon} />

            <p className={styles.subtitle}>
                Share it with your buddy <br /> and get reward
            </p>

            <Button variant="gradient" className={styles.shareButton} onClick={onShare}>
                Share Review <ShareIcon size={20} />
            </Button>
        </div>
    )
}
export default Thanks;