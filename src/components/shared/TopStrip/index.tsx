import { Link } from "react-router-dom";
import styles from "./TopStrip.module.css";
import { SOCIAL_MEDIA } from "../../../utils/constants/contact";
import useTopStrip from "./useTopStrip";

const TopStrip = () => {
    const { config, loading } = useTopStrip();
    if (loading) {
        return (
            <div className="animate-pulse">
                <div className="h-[51px] w-full bg-gray-300 " />
            </div>
        )
    }
    if (!config.show) {
        return null;
    }
    return (
        <Link to={config.link || SOCIAL_MEDIA.WHATSAPPCHANNEL} className={styles.container}>
            <p className={styles.text}>{config.text} </p>
        </Link>
    )
}

export default TopStrip;