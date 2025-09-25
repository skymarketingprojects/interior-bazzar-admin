import { STATIC_IMAGES } from "../../../utils/constants/image";
import styles from "./AdminLoader.module.css"
const AdminLoader = () => {
    return (
        <div className={styles.wrapper}>
            <img
                alt="Loading..."
                className={styles.image}
                src={STATIC_IMAGES.LOADINGGIF}
            />
        </div>
    );
}

export default AdminLoader;