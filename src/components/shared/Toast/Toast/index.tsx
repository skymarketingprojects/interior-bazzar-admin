import styles from "./Success.module.css";
import { STATIC_IMAGES } from "../../../../utils/constants/image";
import type { ToastPropType } from "../../../../types/propTypes";
const Toast = ({ config }: { config: ToastPropType }) => {
  const { type, booldMessage, greeting, normalMessage } = config || {};
  const image =
    type === "success" ? STATIC_IMAGES.GREENTICK : STATIC_IMAGES.REDTICK;
  return (
    <div className={styles.container}>
      <img src={image} alt="Success" className={styles.icon} />
      <h2 className={styles.title}>{greeting}</h2>
      <p className={styles.subtitle}>{booldMessage}</p>
      <p className={styles.message}>{normalMessage}</p>
    </div>
  );
};
export default Toast;
