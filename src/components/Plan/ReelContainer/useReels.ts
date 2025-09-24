import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { StockService } from "../../../api/modules/stock";

const useReels = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchReels = async () => {
    try {
      setLoading(true);
      const res = await StockService.fetchPlanTestimonials();
      if (!res.response) {
        return;
      }
      const images = res.data.map((item) => item.image) || [];
      setImages(images);
    } catch (error) {
      logger.error("Error fetching reels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReels();
  }, []);

  return { loading, images };
};
export default useReels;
