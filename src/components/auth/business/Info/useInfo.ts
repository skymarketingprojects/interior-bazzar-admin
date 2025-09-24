import { useState } from "react";
import type { BusinessInfo } from "../../../../types/global";
import { useAlert } from "../../../../context/AlertContext";
import { BusinessService } from "../../../../api/modules/business";

const useInfo = (incrementStep: () => void) => {
  const { showAlert } = useAlert();
  const [formdata, setFormdata] = useState<BusinessInfo>({
    business_name: "",
    category: "",
    segment: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formdata.business_name) {
      showAlert("Business name is required", "warning");
      return;
    }
    if (!formdata.category) {
      showAlert("Category is required", "warning");
      return;
    }
    if (!formdata.segment) {
      showAlert("Segment is required", "warning");
      return;
    }
    try {
      const res = await BusinessService.createBusiness(formdata);
      if (!res.response) {
        showAlert(res.message, "warning");
        return;
      }
      incrementStep();
    } catch (error) {
      console.log(error);
      showAlert("Error creating business", "error");
    }
  };
  return { formdata, handleChange, handleSubmit };
};
export default useInfo;
