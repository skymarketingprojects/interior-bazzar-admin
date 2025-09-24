import { STATIC_IMAGES } from "../../../utils/constants/image";
import styles from "./UploadImageIcon.module.css"
const UploadImageIcon = ({ UploadText = "Upload", onClick, }: { UploadText?: string, onClick?: () => void }) => {
    return (
        <div onClick={onClick} className={styles.uploadIconContainer}>
            <img className={styles.uploadIcon} src={STATIC_IMAGES.UPLOAD_ICON} alt="Upload" />
            <p>{UploadText}</p>
        </div>
    )
}
export default UploadImageIcon;