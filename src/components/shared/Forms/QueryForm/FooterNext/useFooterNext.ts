import { useState } from "react";
import useToast from "../../../Toast/useToast";
import { logger } from "../../../../../utils/logger";
import { useAlert } from "../../../../../context/AlertContext";
import { QuoteService } from "../../../../../api/modules/quote";
import {
  BUDGETYPES,
  BUSINESSTYPES,
  LEADTYPES,
} from "../../../../../utils/constants/foms";
const useFooterNext = (email: string) => {
  const budgetOptions = BUDGETYPES;
  const businessTypeOptions = BUSINESSTYPES;
  const leadTypeOptions = LEADTYPES;
  const { showAlert } = useAlert();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    id: 0,
    leadType: "",
    phoneNumber: "",
    businessType: "",
    budget: "",
    name: "",
    email: email,
    noOfEmp: "",
    companyName: "",
    query: "",
    city: "",
    state: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { id, ...data } = formData;
      const res = await QuoteService.createQuote(data);
      if (!res.response) {
        showAlert("Error while submittion", "error");
        logger.error("Error while submittion: ", res);
        return;
      }
      setFormData((prev: any) => ({ ...prev, id: res.data.id }));
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
      const res = await QuoteService.verifyQuote(formData);
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
      });
    } catch (e) {
      showAlert("Error while submittion", "error");
      logger.error("Error while submittion: ", e);
    } finally {
      setLoading(false);
    }
  };
  return {
    step,
    budgetOptions,
    businessTypeOptions,
    leadTypeOptions,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleSubmit2,
  };
};
export default useFooterNext;
