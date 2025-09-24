import { useState } from "react";
import type { BusinessLocation } from "../../../../types/global";
import { useAlert } from "../../../../context/AlertContext";
import { BusinessService } from "../../../../api/modules/business";

const useLocation = (incrementStep: () => void) => {
  const { showAlert } = useAlert();
  const [formdata, setFormdata] = useState<BusinessLocation>({
    city: "",
    state: "",
    location_link: "",
    country: "",
    pin_code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleskipClick = () => {
    incrementStep();
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formdata.city) {
      showAlert("City is required", "warning");
      return;
    }
    if (!formdata.state) {
      showAlert("State is required", "warning");
      return;
    }
    if (!formdata.pin_code) {
      showAlert("Pincode is required", "warning");
      return;
    }
    if (!formdata.country) {
      showAlert("Country is required", "warning");
      return;
    }
    try {
      const res = await BusinessService.updateLocation(formdata);
      if (!res.response) {
        showAlert(res.message, "warning");
        return;
      }
      incrementStep();
    } catch (e) {
      showAlert("Error creating business", "error");
      console.log(e);
    }
  };
  return { formdata, handleChange, handleSubmit, handleskipClick };
};

export default useLocation;
