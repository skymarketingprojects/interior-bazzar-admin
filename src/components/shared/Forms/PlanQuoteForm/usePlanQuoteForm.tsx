import { useState } from "react";
import { Error } from "../../Toast";
import { logger } from "../../../../utils/logger";
import { useAlert } from "../../../../context/AlertContext";
import { useModal } from "../../../../context/ModalContext";
import { QueryService } from "../../../../api/modules/query";
import type { AdsQueryForm } from "../../../../types/content";
import { SERVICES } from "../../../../utils/constants/app";
const usePlanQuoteForm = () => {
  const { showAlert } = useAlert();
  const [step, setStep] = useState(1);
  const { showModal, closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AdsQueryForm
  >({
    id: 0,
    name: "",
    city: "",
    email: "",
    query: "",
    phone: "",
    country: "",
    interested: "",
  });
  const options = SERVICES;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "interested") {
      const selectedOption = options.find((option) => option.id === Number(value));
      if (selectedOption) {
        setFormData((prev) => ({ ...prev, interested: selectedOption.service }));
        return;
      }
    }
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
      showAlert("Query submitted successfully", "success");
      closeModal();
    } catch (e) {
      showModal(<Error />)
      logger.error("Error while submittion: ", e);
    } finally {
      setLoading(false);
    }
  };
  return {
    step,
    options,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleSubmit2,
  };
};
export default usePlanQuoteForm;
