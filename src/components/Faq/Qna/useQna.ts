import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { QnaService } from "../../../api/modules/qna";

const useQna = () => {
  const [loading, setLoading] = useState(true);
  const [qna, setQna] = useState([] as any[]);
  const fetchQna = async () => {
    try {
      setLoading(true);
      const res = await QnaService.getQnas();
      if (!res.response) {
        return;
      }
      setQna(res.data);
    } catch (e) {
      logger.error("Error fetching disclaimer", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQna();
  }, []);
  return { qna, loading };
};

export default useQna;
