import { AdsQueryForm } from "../../Forms";
import { Button, StarIcon } from "../../../ui";
import styles from "./BusinessCardHor.module.css";
import { useModal } from "../../../../context/ModalContext";
import { STATIC_IMAGES } from "../../../../utils/constants/image";
import type { BusinessCardProps } from "../../../../types/content";

const businessCardHor = ({ business }: { business: BusinessCardProps }) => {
    const { showModal } = useModal();

    const handleShowModal = () => {
        showModal(<AdsQueryForm />)
    }
    const {
        badge,
        timeAgo,
        location,
        ratingValue,
        companyName,
        businessName,
        businessImage,
    } = business;

    return (
        <div className={`container ${styles.card} ${styles.premium}`}>
            {badge &&
                <img
                    src={badge}
                    className={styles.businessTag}
                    alt="business badge given by interior bazzar"
                />
            }
            <div className={styles.imageContainer}>
                <img src={businessImage} alt="business" className={styles.businessImage} />
            </div>

            <div className={styles.cardContent}>
                <div className={styles.header}>
                    <h2 className={`linewrap-2 ${styles.businessName}`}>{businessName}</h2>
                    {location && <span className={` ${styles.location}`}>{location}</span>}
                </div>
                <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                        {ratingValue > 0 &&
                            Array.from({ length: ratingValue }, (_, index) => (
                                <StarIcon className={styles.starIcon} key={index} />
                            ))}
                        <span className={styles.ratingValue}>{ratingValue}/5.0</span>
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
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={STATIC_IMAGES.USERICONTHEME} />
                        <span className={`linewrap-1 ${styles.iconText}`}>Member 202</span>
                    </div>
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
}

export const BusinessCardHorShimmer = () => {
    return (
        <div className="container grid grid-cols-[0.4fr_0.6fr] max-w-[var(--max-width-container)] rounded-md bg-white shadow-md my-8">
            {/* Image */}
            <div className="p-4">
                <div className="shimmer aspect-[2/1] w-full h-full rounded-md"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <div className="shimmer w-2/3 h-5"></div>
                    <div className="shimmer w-1/3 h-4"></div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="shimmer w-4 h-4"></div>
                        ))}
                    </div>
                    <div className="shimmer w-10 h-4"></div>
                </div>

                {/* Company Info */}
                <div className="flex gap-2">
                    <div className="shimmer w-5 h-5 rounded-full"></div>
                    <div className="shimmer w-1/3 h-4"></div>
                </div>

                {/* Action Buttons Row 1 */}
                <div className="flex justify-between gap-4">
                    <div className="shimmer w-24 h-6 rounded"></div>
                    <div className="shimmer w-24 h-6 rounded"></div>
                    <div className="shimmer w-20 h-6 rounded"></div>
                </div>

                {/* Action Buttons Row 2 */}
                <div className="flex justify-between gap-4">
                    <div className="shimmer w-1/2 h-10 rounded"></div>
                    <div className="shimmer w-1/2 h-10 rounded"></div>
                </div>
            </div>
        </div>
    );

}
export default businessCardHor;