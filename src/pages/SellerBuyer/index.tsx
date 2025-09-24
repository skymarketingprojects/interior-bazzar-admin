import styles from "./SellerBuyer.module.css";
import { Button } from "../../components/ui";
import useSellerBuyer from "./useSellerBuyer";
import { QueryForm } from "../../components/Home";
import { TopicChipStrip } from "../../components/SellerBuyer";
import BusinessCard from "../../components/shared/Business/BusinessCard";
import BusinessCardHor, { BusinessCardHorShimmer } from "../../components/shared/Business/BusinessCardHor";
import BusinessContainerShimmer from "../../components/Home/BusinessContainer/Shimmer";

const SellerBuyer = () => {
    const { initialLoad, loading, topSellers, businesses, loadMore } = useSellerBuyer();

    return (
        <div className={styles.container}>
            <TopicChipStrip />
            <h3 className={`container ${styles.title}`}>Top Sellers</h3>

            <div className={`container ${styles.topSellerContainer}`}>
                {initialLoad ? (
                    <BusinessContainerShimmer number={3} />
                ) : (
                    topSellers.map((business) => (
                        <BusinessCard key={business.id} business={business} />
                    ))
                )}
            </div>

            <div className={`container ${styles.title} ${styles.businessSection}`}>
                {initialLoad && businesses.length === 0 ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <BusinessCardHorShimmer key={index} />
                    ))
                ) : (
                    <>
                        {businesses.map((business) => (
                            <BusinessCardHor key={business.id} business={business} />
                        ))}
                        {loading &&
                            Array.from({ length: 3 }).map((_, index) => (
                                <BusinessCardHorShimmer key={index} />
                            ))}
                    </>
                )}
            </div>

            <div className="container">
                <Button onClick={loadMore} disabled={loading}>
                    {loading ? "Loading..." : "Load more"}
                </Button>
            </div>

            <QueryForm />
        </div>
    );
};

export default SellerBuyer;
