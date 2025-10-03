import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { AdminService } from "../../../api/modules/admin";

const useAnalytics = () => {
  const [noOfUsers, setNoOfUsers] = useState<number>(0); // Example static data, replace with actual logic
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
  useEffect(() => {
    fetchUsers();
  }, []);
  return { noOfUsers };
};

export default useAnalytics;
