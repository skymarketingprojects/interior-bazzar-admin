import { useState } from "react";
import { logger } from "../../../../../utils/logger";
import { QuoteService } from "../../../../../api/modules/quote";
import { useAlert } from "../../../../../context/AlertContext";
import { BUDGET_OPTIONS } from "../../../../../utils/constants/app";
import { BUSINESSTYPES, BUDGETYPES } from "../../../../../utils/constants/foms";
import useToast from "../../../Toast/useToast";
const businessTypeOptions = BUSINESSTYPES;
const budgetOptions = BUDGETYPES;
const useQueryNext = (leadType: string | undefined, phoneNumber: string) => {
  const { showAlert } = useAlert();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    id: 0,
    leadType: leadType,
    phoneNumber: phoneNumber,
    businessType: "",
    budget: "",
    name: "",
    email: "",
    noOfEmp: "",
    companyName: "",
    query: "",
    city: "",
    state: "",
  });
  const options = BUDGET_OPTIONS;
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
    businessTypeOptions,
    budgetOptions,
    options,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleSubmit2,
  };
};
export default useQueryNext;
