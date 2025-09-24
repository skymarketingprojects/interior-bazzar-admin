import { useState } from "react";
import { logger } from "../../../../utils/logger";
import { QueryService } from "../../../../api/modules/query";
import useToast from "../../Toast/useToast";
import { useAlert } from "../../../../context/AlertContext";
import type { AdsQueryForm } from "../../../../types/content";
const useAdsQuery = () => {
  const { showAlert } = useAlert();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AdsQueryForm>({
    id: 0,
    name: "",
    city: "",
    email: "",
    query: "",
    phone: "",
    country: "",
    interested: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { id, ...data } = formData;
      const res = await QueryService.createAdsQuery(data);
      if (!res.response) {
        showAlert("Error while submittion", "error");
        logger.error("Error while submittion: ", res);
        return;
      }
      setFormData((prev) => ({ ...prev, id: res.data.id }));
      setStep(2);
    } catch (e) {
      logger.error("Error while submittion: ", e);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await QueryService.verifyAdsQuery(formData);
      if (!res.response) {
        showAlert("Error while submittion", "error");
        logger.error("Error while submittion: ", res);
        return;
      }
      showToast({
        greeting: "Thank you",
        booldMessage: "Query submitted successfully",
        normalMessage: "Our sales team will contact you soon",
        type: "success",
      })
    } catch (e) {
      showToast({
        greeting: "OOps...",
        booldMessage: "Query could not be submitted",
        normalMessage: "Please try and fill the form again",
        type: "error",
      })
      logger.error("Error while submittion: ", e);
    } finally {
      setLoading(false);
    }
  };
  return {
    step,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleSubmit2,
  };
};

export default useAdsQuery;
