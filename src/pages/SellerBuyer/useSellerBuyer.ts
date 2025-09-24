import { useEffect, useState, useCallback } from "react";
import type { BusinessCardProps } from "../../types/content";
import { BusinessService } from "../../api/modules/business";
import { logger } from "../../utils/logger";

const useSellerBuyer = () => {
  const [businesses, setBusinesses] = useState<BusinessCardProps[]>([]);
  const [topSellers, setTopSellers] = useState<BusinessCardProps[]>([]);
  const [pageNo, setPageNo] = useState(1);

  const [loading, setLoading] = useState(false); // covers both initial + pagination
  const [initialLoad, setInitialLoad] = useState(true); // first-time load only

  const fetchBusinesses = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const res = await BusinessService.fetchTopSellers(page);
      if (!res.response) return;

      if (res.data) {
        if (page === 1) {
          setTopSellers(res.data.topSeller || []);
          setBusinesses(res.data.businesses || []);
        } else {
          setBusinesses((prev) => [...prev, ...(res.data.businesses || [])]);
        }
      }
    } catch (e) {
      logger.error("Error fetching businesses: ", e);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  }, []);

  // initial load
  useEffect(() => {
    fetchBusinesses(1);
  }, [fetchBusinesses]);

  // pagination
  const loadMore = () => {
    const nextPage = pageNo + 1;
    setPageNo(nextPage);
    fetchBusinesses(nextPage);
  };

  return { businesses, topSellers, loading, initialLoad, loadMore };
};

export default useSellerBuyer;
