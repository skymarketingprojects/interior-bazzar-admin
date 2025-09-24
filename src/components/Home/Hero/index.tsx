import Carousel from "../../shared/Carousel";
import styles from "./Hero.module.css"
import useHero from "./useHero";
// interface LeadCardProps {
//     line1: string;
//     line2: string;
//     line3: string;
//     buttonText: string;
//     personImage: string;
//     badgeImage: string;
//     backgroundImage: string;
// }

const Hero = () => {
    const { loading, heroImages } = useHero();
    if (loading) {
        return <CarouselShimmer />
    }
    if (heroImages.length === 0) return null

    return (
        <Carousel>
            {heroImages.map((hero, index) => (
                <img
                    key={index}
                    src={hero.image}
                    className={styles.heroImage}
                    alt={`Slide ${index}`} />
            ))}
        </Carousel>

    )
}
export default Hero;

const CarouselShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative ">
                <div className="grid w-full">
                    {[1].map((i) => (
                        <div
                            key={i}
                            className="w-full aspect-[3.5/1] bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>

                {/* Stepper Dots */}
                <div className="flex justify-center gap-2  absolute -bottom-[23px] left-1/2 transform -translate-x-1/2">
                    {[1, 2,].map((dot) => (
                        <div
                            key={dot}
                            className="w-[10px] h-[10px] bg-gray-900 rounded-full animate-pulse"
                        />
                    ))}
                </div>
            </div >
        </div >
    );
};
// <div
//     className={styles.card}
//     style={{ backgroundImage: `url(${backgroundImage})` }}
// >
//     <div className={styles.leftContent}>
//         <h1 className={styles.line1}>{line1}</h1>
//         <p className={styles.line2}>{line2}</p>
//         <p className={styles.line3}>{line3}</p>
//         <button className={styles.button}>{buttonText}</button>
//     </div>

//     <div className={styles.rightContent}>
//         <img src={personImage} alt="person" className={styles.personImage} />
//         <img src={badgeImage} alt="badge" className={styles.badgeImage} />
//     </div>
// </div>


