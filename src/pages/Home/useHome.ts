import { useEffect, useState } from "react";
import { logger } from "../../utils/logger";
import { BusinessService } from "../../api/modules/business";
import type { BusinessCardProps } from "../../types/content";
import { useAlert } from "../../context/AlertContext";

const useHome = () => {
  const { showAlert } = useAlert();
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [businesses, setBusinesses] = useState<BusinessCardProps[]>([]);

  const fetchBusiness = async () => {
    try {
      setLoading(true);
      const res = await BusinessService.fetchPaginatedBusiness(pageNo);

      if (!res?.response) return;

      setBusinesses((prev) =>
        pageNo === 1 ? res.data.data : [...prev, ...res.data.data]
      );

      setHasNext(res.data.hasNext);
      setTotalPages(res.data.totalPages);
    } catch (e) {
      logger.error("Error fetching business: ", e);
      showAlert("Failed to fetch businesses", "error");
    } finally {
      setLoading(false);
    }
  };

  const incrementPage = () => {
    if (hasNext) {
      setPageNo((prev) => prev + 1);
    } else {
      showAlert("No more business", "info");
    }
  };

  useEffect(() => {
    fetchBusiness();
  }, [pageNo]);

  return {
    pageNo,
    loading,
    businesses,
    totalPages,
    incrementPage,
  };
};

export default useHome;
