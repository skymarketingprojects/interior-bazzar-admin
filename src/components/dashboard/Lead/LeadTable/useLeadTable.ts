import { useEffect, useState } from "react";
import { logger } from "../../../../../utils/logger";
import { AdminService } from "../../../../../api/modules/admin";
import type { AdminLeadType } from "../../../../../types/content";
const useLeadTable = () => {
  const [pageSize] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [leads, setLeads] = useState<AdminLeadType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await AdminService.fetchLeads(pageNo, pageSize);
      if (!res.response) {
        logger.error("Failed to fetch leads");
        return;
      }
      setLeads(res.data.leads);
      setHasNext(res.data.hasNext);
      setTotalPages(res.data.totalPages);
    } catch (e) {
      logger.error("Error while fetching leads: ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [pageNo]);
  const incrementPage = () => {
    if (pageNo < totalPages) {
      setPageNo((prev) => prev + 1);
    }
  };

  return {
    leads,
    incrementPage,
    loading,
    pageSize,
    pageNo,
    totalPages,
    setPageNo,
    hasNext,
  };
};

export default useLeadTable;
