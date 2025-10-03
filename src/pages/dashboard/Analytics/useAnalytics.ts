import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { AdminService } from "../../../api/modules/admin";
import { UsersIcon } from "../../../components/ui/Icons/SVG";

const useAnalytics = () => {
  const [noOfUsers, setNoOfUsers] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState([
    { icon: UsersIcon, name: "Total Users", value: 250 },
    { icon: UsersIcon, name: "Total Queries", value: 987 },
    { icon: UsersIcon, name: "Total Businesses", value: 8998 },
    { icon: UsersIcon, name: "Today Leads", value: 897987 },
  ]);
  const fetchUsers = async () => {
    try {
      const res = await AdminService.fetchTotalUsers();
      if (!res.response) {
        logger.error("Failed to fetch total users");
        return;
      }
      setNoOfUsers(res.data.totalUsers);
    } catch (e) {
      logger.error("Error while setting total User: ", e);
    }
  };
  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const res = await AdminService.getAllAnalytics();
      if (!res.response) {
        return;
      }
      setAnalytics([
        {
          icon: UsersIcon,
          name: "Total Users",
          value: res.data.totalUsers,
        },
        {
          icon: UsersIcon,
          name: "Total Queries",
          value: res.data.totalQueries,
        },
        {
          icon: UsersIcon,
          name: "Total Businesses",
          value: res.data.totalBusinesses,
        },
        {
          icon: UsersIcon,
          name: "Today Signups",
          value: res.data.todaySignups,
        },
      ]);
    } catch (error) {
      logger.log("This is error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
    fetchAnalytics();
  }, []);
  return { loading, noOfUsers, analytics };
};

export default useAnalytics;
