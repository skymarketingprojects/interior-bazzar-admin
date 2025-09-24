import styles from "./OfferHero.module.css"
import useOfferHero from "./useOfferHero";
const OfferHero = () => {
    const { loading, fLeft, fRight } = useOfferHero();
    if (loading) {
        return <OfferHeroShimmer />;
    }
    return (
        <div className={`container ${styles.offerHero}`}>
            <img
                src={fLeft} alt="offer-hero"
                className={`${styles.offerImage} ${styles.offerImageLeft}`}
            />
            <img
                src={fRight} alt="offer-hero"
                className={`${styles.offerImage} ${styles.offerImageRight}`}
            />
        </div>
    );
}

export default OfferHero;

const OfferHeroShimmer = () => {
    return (
        <div className={`container h-[300px] ${styles.offerHero}`}>

            <div className="w-full h-[300px] rounded-2xl shadow-md  bg-white p-4 animate-pulse">
                <div className="h-[300px]  bg-gray-200" />
            </div>
            <div className="w-full h-[300px] rounded-2xl shadow-md  bg-white p-4 animate-pulse">
                <div className="h-[300px]  bg-gray-200" />
            </div>
        </div >
    );
}
