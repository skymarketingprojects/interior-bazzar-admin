import { useState } from "react";
import { LEADTYPES } from "../../../../utils/constants/foms";
const services = LEADTYPES;
const useQueryForm = () => {
  const [formData, setFormData] = useState({
    leadType: "",
    phoneNumber: "",
  });

  const handleFormChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, services, handleFormChange };
};

export default useQueryForm;
