import { useEffect, useState } from "react";
// import { PageService } from "../../../api/modules/page";
import { logger } from "../../../utils/logger";
const usePageContent = (fetchFn: () => Promise<any>) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");

  const fetchContent = async () => {
    try {
      setLoading(true);
      const res = await fetchFn();
      if (!res.response) return;
      setContent(res.data.page_content);
    } catch (e) {
      logger.error("Error fetching page content", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return { loading, content };
};

export default usePageContent;
