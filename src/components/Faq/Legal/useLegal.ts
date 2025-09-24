import { useEffect, useState } from "react";
import { PageService } from "../../../api/modules/page";
import { logger } from "../../../utils/logger";

const useLegal = () => {
  const [loading, setLoading] = useState(true);
  const [legal, setLegal] = useState("");
  const fetchDisclaimer = async () => {
    try {
      setLoading(true);
      const res = await PageService.getLegal();
      if (!res.response) {
        return;
      }
      setLegal(res.data.page_content);
    } catch (e) {
      logger.error("Error fetching disclaimer", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDisclaimer();
  }, []);
  return { loading, legal };
};

export default useLegal;
