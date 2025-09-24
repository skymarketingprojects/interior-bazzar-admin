import React, { useState } from "react";
import { logger } from "../../../../utils/logger";
import { useAlert } from "../../../../context/AlertContext";
import { ContactService } from "../../../../api/modules/conctact";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await ContactService.submitContactInfo(formData);
      if (!res.response) {
        showAlert("Error while submittion", "error");
        logger.error("Error while submittion: ", res);
        return;
      }
      showAlert(res.message, "success");
      resetForm();
    } catch (e) {
      showAlert("Error while submittion", "error");
      logger.error("Error while submittion: ", e);
    } finally {
      setLoading(false);
    }
  };
  return { formData, handleChange, handleSubmit, loading };
};
export default useContactForm;
