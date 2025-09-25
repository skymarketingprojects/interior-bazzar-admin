import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { QueryService } from "../../../api/modules/query";

const useTopStrip = () => {
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({
    link: "",
    text: "",
    show: false,
  });
  const fetchTopStrip = async () => {
    try {
      const res = await QueryService.getStripConfig();
      if (!res.response) {
        return;
      }
      setConfig(res.data);
    } catch (e) {
      logger.error("Error while fetching top strip", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopStrip();
  }, []);

  return { config, loading };
};
export default useTopStrip;
