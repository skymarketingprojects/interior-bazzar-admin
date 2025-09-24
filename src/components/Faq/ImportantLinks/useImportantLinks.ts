import { useEffect, useState } from "react";
import { PageService } from "../../../api/modules/page";
import { logger } from "../../../utils/logger";
const useImportantLinks = () => {
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState("");
  const fetchLinks = async () => {
    try {
      setLoading(true);
      const res = await PageService.getImportantLinks();
      if (!res.response) {
        return;
      }
      setLinks(res.data.page_content);
    } catch (e) {
      logger.error("Error fetching disclaimer", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);
  return { loading, links };
};
export default useImportantLinks;
