import { useEffect, useState } from "react";
import { PageService } from "../../../api/modules/page";
import { logger } from "../../../utils/logger";

const useLeadPolicy = () => {
  const [loading, setLoading] = useState(true);
  const [leadPolicy, setLeadPolicy] = useState("");
  const fetchLeadPolicy = async () => {
    try {
      setLoading(true);
      const res = await PageService.getLeadPolicy();
      if (!res.response) {
        return;
      }
      setLeadPolicy(res.data.page_content);
    } catch (e) {
      logger.error("Error fetching disclaimer", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeadPolicy();
  }, []);
  return { loading, leadPolicy };
};
export default useLeadPolicy;
