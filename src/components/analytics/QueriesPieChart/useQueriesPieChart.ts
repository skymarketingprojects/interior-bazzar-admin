import { useEffect, useState } from "react";
import { AdminService } from "../../../api/modules/admin";
import { logger } from "../../../utils/logger";

const useQueriesPieChart = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [leadsData, setLeadsData] = useState<any>([
    { name: "Assigned Leads", value: 3500 },
    { name: "Unassigned Leads", value: 4000 },
  ]);
  const [totalLeads, setTotalLeads] = useState<number>(0);

  const fetchLeadsAnalytics = async () => {
    try {
      setLoading(true);
      const res = await AdminService.getLeadsAnalytics();
      if (!res.response) {
        return;
      }
      logger.log("this is res: ", res);
      setLeadsData([
        {
          name: "Unassigned Leads",
          value: res.data.unassignedLeads,
        },
        {
          name: "Assigned Leads",
          value: res.data.assignedLeads,
        },
        // {
        //   name: "Today Leads",
        //   value: res.data.todayLeads,
        // },
      ]);
      setTotalLeads(res.data.totalLeads);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeadsAnalytics();
  }, []);
  return { loading, leadsData, totalLeads };
};
export default useQueriesPieChart;
