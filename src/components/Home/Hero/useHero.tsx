import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { StockService } from "../../../api/modules/stock";
import type { HomeCarouselType } from "../../../types/global";
const useHero = () => {
    // const [hero, setHero] = useState({
    //     line1: "Ab Leads Milegy Pakki",
    //     line2: "Flat 25% off on Packages",
    //     line3: "Limited Time Offer",
    //     buttonText: "Get Genuine Leads now",
    //     personImage: "",
    //     badgeImage: "",
    //     backgroundImage: "",
    // });
    const [loading, setLoading] = useState(true);
    const [heroImages, setHeroImages] = useState<HomeCarouselType[]>([]);

    const fetchHeroImages = async () => {
        setLoading(true);
        try {
            const res = await StockService.getCarouselImages();
            if (!res.response) {
                return [];
            }
            setHeroImages(res.data);
        } catch (error) {
            logger.error("Error while fetching hero imags: ", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchHeroImages();
    }, [])

    return { loading, heroImages };

}
export default useHero;