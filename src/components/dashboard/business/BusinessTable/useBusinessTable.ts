import { useEffect, useState } from "react";
import { logger } from "../../../../utils/logger";
import { AdminService } from "../../../../api/modules/admin";
import type { AdminBusinessListType } from "../../../../types/content";
const useBusinessTable = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [businesses, setBusinesses] = useState<AdminBusinessListType[]>([
    {
      id: 1,
      name: "Acme Corp",
      plan: "Premium",
      joinAt: "2023-08-15T10:23:00Z",
      totalLeads: 150,
      assignedLeads: 90,
      platformLeads: 60,
    },
    {
      id: 2,
      name: "Beta Solutions",
      plan: "Standard",
      joinAt: "2022-11-03T08:15:00Z",
      totalLeads: 80,
      assignedLeads: 50,
      platformLeads: 30,
    },
    {
      id: 3,
      name: "Gamma Group",
      plan: "Enterprise",
      joinAt: "2024-03-21T14:05:00Z",
      totalLeads: 220,
      assignedLeads: 180,
      platformLeads: 40,
    },
    {
      id: 4,
      name: "Delta Dynamics",
      plan: "Basic",
      joinAt: "2023-01-10T09:40:00Z",
      totalLeads: 45,
      assignedLeads: 20,
      platformLeads: 25,
    },
    {
      id: 5,
      name: "Epsilon Ventures",
      plan: "Premium",
      joinAt: "2024-07-05T12:00:00Z",
      totalLeads: 300,
      assignedLeads: 200,
      platformLeads: 100,
    },
  ]);
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
