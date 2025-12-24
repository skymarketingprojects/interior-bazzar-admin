import { useEffect, useState } from "react";
import { logger } from "../../../../utils/logger";
import { AdminService } from "../../../../api/modules/admin";
import type {
  AdminBusinessListType,
  BusinessFilterType,
} from "../../../../types/content";
const useBusinessTable = (_filter: BusinessFilterType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [businesses, setBusinesses] = useState<AdminBusinessListType[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize] = useState<number>(20);

  const fetchBusinesses = async () => {
    try {
      setLoading(true);
      const res = await AdminService.fetchBusinesses(pageNo, pageSize);
      if (!res.response) {
        logger.error("Failed to fetch businesses");
        return;
      }
      setHasNext(res.data.hasNext);
      setTotalPages(res.data.totalPages);
      setBusinesses(res.data.businesses);
    } catch (e) {
      logger.error("Error while fetching businesses: ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
    return () => {};
  }, [pageNo]);
  const incrementPage = () => {
    if (pageNo < totalPages) {
      setPageNo((prev) => prev + 1);
    }
  };

  return {
    pageNo,
    loading,
    hasNext,
    pageSize,
    setPageNo,
    businesses,
    totalPages,
    incrementPage,
  };
};

export default useBusinessTable;
