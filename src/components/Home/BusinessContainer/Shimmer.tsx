import BusinessCardShimmer from "../../shared/Business/BusinessCard/Shimmer";
import styles from "./BusinessContainer.module.css"
const BusinessContainerShimmer = ({ number }: { number: number }) => {
    return (
        <div className={`container ${styles.container}`}>
            {Array.from({ length: number }).map((_, index) => (
                <BusinessCardShimmer key={index} />
            ))}
        </div>
    );
};
export default BusinessContainerShimmer;