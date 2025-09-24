import { useEffect, useState } from "react";
import { PageService } from "../../../api/modules/page";
import { logger } from "../../../utils/logger";

const usePayment = () => {
  const [loading, setLoading] = useState(true);
  const [payement, setPayment] = useState("");
  const fetchPayment = async () => {
    try {
      setLoading(true);
      const res = await PageService.getPaymentPage();
      if (!res.response) {
        return;
      }
      setPayment(res.data.page_content);
    } catch (e) {
      logger.error("Error fetching disclaimer", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);
  return { loading, payement };
};
export default usePayment;
