import { useState } from "react";
import { logger } from "../../../../utils/logger";
import { useAlert } from "../../../../context/AlertContext";
import { ContactService } from "../../../../api/modules/conctact";

const useNeedForm = () => {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
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
        showAlert("Error while submitting form", "error");
        return;
      }
      showAlert("Query submitted successfully", "success");
    } catch (e) {
      logger.error("Error while submitting Need form :", e);
    } finally {
      setLoading(false);
    }
  };
  return { formData, handleChange, handleSubmit, loading };
};
export default useNeedForm;
