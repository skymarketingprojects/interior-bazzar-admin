import type { BusinessCardProps } from "../../../types/content";
import BusinessCard from "../../shared/Business/BusinessCard";
import styles from "./BusinessContainer.module.css"
const ProudctContainer = ({ businesses }: { businesses: BusinessCardProps[] }) => {
    if (!businesses.length) return null
    return (
        <>
            <div className={`container ${styles.container}`}>
                {businesses.map((business) => (
                    <BusinessCard key={business.id} business={business} />
                ))}
            </div>
        </>
    )
}
export default ProudctContainer;