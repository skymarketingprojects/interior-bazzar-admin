import { AdsQueryForm } from "../../Forms";
import styles from "./BusinessCard.module.css";
import { Button, StarIcon } from "../../../ui";
import { useModal } from "../../../../context/ModalContext";
import { STATIC_IMAGES } from "../../../../utils/constants/image";
import type { BusinessCardProps } from "../../../../types/content";

const BusinessCard = ({ business }: { business: BusinessCardProps }) => {
    const { showModal } = useModal();

    const handleShowModal = () => {
        showModal(<AdsQueryForm />)
    }

    const {
        since,
        badge,
        timeAgo,
        category,
        location,
        ratingValue,
        companyName,
        businessName,
        businessImage,
    } = business;

    return (
        <div className={`${styles.card} ${styles.premium}`}>
            {category && <span className={styles.ribbon}>{category}</span>}
            <div className={styles.imageContainer}>
                <img src={businessImage} alt="business" className={styles.businessImage} />
                {badge &&
                    <img
                        src={badge}
                        alt="business badge given by interior bazzar"
                        className={styles.businessTag}
                    />}
            </div>

            <div className={styles.cardContent}>
                <div className={styles.header}>
                    <h2 className={`linewrap-1 ${styles.businessName}`}>{businessName}</h2>
                    {<span className={`${styles.location}`}>{location}</span>}
                </div>
                <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                        {ratingValue > 0 &&
                            Array.from({ length: ratingValue }, (_, index) => (
                                <StarIcon className={styles.starIcon} key={index} />
                            ))}
                        <span className={styles.ratingValue}>{ratingValue}/5</span>
                    </div>
                    <span className={styles.ratingValue}>{timeAgo}</span>
                </div>

                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={STATIC_IMAGES.USERICONBLACK} />
                    <span className={`linewrap-1 ${styles.iconText}`}>{companyName}</span>
                </div>

                <div className={styles.actionButtons}>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={STATIC_IMAGES.VERIFIED} />
                        <span className={`linewrap-1 ${styles.iconText}`}>GST Verified </span>
                    </div>
                    {since &&
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={STATIC_IMAGES.USERICONTHEME} />
                            <span className={`linewrap-1 ${styles.iconText}`}>Since {since}</span>
                        </div>
                    }
                    <div className={styles.iconContainer}>
                        <button onClick={handleShowModal} className={styles.askPriceButton}>Ask Price</button>
                    </div>
                </div>
                <div className={styles.actionButtons}>
                    <Button onClick={handleShowModal} variant="contact" className={`${styles.ctaButton} ${styles.contactBtn}`}>
                        Contact No
                    </Button>
                    <Button onClick={handleShowModal} variant="view" className={`${styles.ctaButton} ${styles.viewBtn}`}>
                        View No
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default BusinessCard;
