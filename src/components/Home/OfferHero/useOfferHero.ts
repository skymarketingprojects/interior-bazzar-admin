import { useEffect, useState } from "react";
import { StockService } from "../../../api/modules/stock";
import { logger } from "../../../utils/logger";
const useOfferHero = () => {
  const [fLeft, setFLeft] = useState("");
  const [fRight, setFRight] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchOfferHero = async () => {
    try {
      const res = await StockService.getOfferHeroImages();
      if (!res.response) {
        return;
      }
      setFLeft(res.data[0].image);
      setFRight(res.data[1].image);
    } catch (e) {
      logger.error("Error fetching offer hero", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOfferHero();
  }, []);
  return { loading, fLeft, fRight };
};
export default useOfferHero;
