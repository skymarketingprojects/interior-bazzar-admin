import { useEffect, useState } from "react";
import { logger } from "../../utils/logger";
import { useNavigate } from "react-router-dom";
import type { PlanType } from "../../types/content";
import { PlansService } from "../../api/modules/plan";
import { useAlert } from "../../context/AlertContext";
import { IMAGE_PURPOSE, PAGES } from "../../utils/constants/app";
import { useImageUploader } from "../../hooks/upload/useImageUploader";
const useMakePayment = (planId: string | null) => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [activePlan, setActivePlan] = useState<PlanType>();
  const [userInfo, setUserInfo] = useState({
    id: "",
    plan: "",
    name: "",
    email: "",
    phone: "",
    state: "",
    country: "",
    transactionId: "",
    attachment_url: "",
  });

  const { uploadImage, isImageUploading, uploadProgress } = useImageUploader({
    forPurpose: IMAGE_PURPOSE.PAYMENT_IMAGE,
    onUploadComplete: (url) => {
      setUserInfo((prev) => ({ ...prev, attachment_url: url }));
    },
  });
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      await uploadImage(file);
      URL.revokeObjectURL(url);
    }
  };

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await PlansService.getPlans();
      if (!res.response) {
        return;
      }
      setPlans(res.data);
      if (planId) {
        const planS = res.data.find(
          (plan: PlanType) => Number(plan.id) === Number(planId)
        );
        setActivePlan(planS);
      } else {
        setActivePlan(res.data[0]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const planId = Number(e.target.value);
    const plan = plans.find((plan: any) => plan.id === planId);
    if (!plan) return;
    setUserInfo((prev) => ({ ...prev, plan: plan.name }));
    setActivePlan(plan);
  };
  function formatIndianPrice(
    value: number | string | undefined | null,
    multiplier: number = 1
  ): string {
    if (!value) return "0";

    // convert to number (strip commas if string)
    const num =
      typeof value === "string"
        ? Number(value.replace(/,/g, ""))
        : Number(value);

    if (isNaN(num)) return "0";

    // apply multiplier
    const result = Math.round(num * multiplier);

    // format as Indian standard (lakh/crore)
    return new Intl.NumberFormat("en-IN").format(result);
  }
  useEffect(() => {
    fetchPlans();
  }, []);
  const reset = () => {
    navigate(PAGES.FAQ);
  };
  useEffect(() => {
    if (timeLeft <= 0) {
      reset();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, reset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInfo.email && !userInfo.phone) {
      showAlert("Can't proceed without email or phone", "error");
      return;
    }

    try {
      const res = await PlansService.planQuery(userInfo);
      if (!res.response) {
        showAlert(res.message, "error");
        return;
      }
      if (!userInfo.attachment_url && !userInfo.transactionId) {
        showAlert(
          "Please upload payment screenshot or transaction Id",
          "error"
        );
      } else {
        showAlert(res.message, "success");
      }
      setUserInfo({ ...userInfo, id: res.data.id });
    } catch (error) {
      logger.error(error);
    }
  };
  return {
    plans,
    seconds,
    loading,
    minutes,
    userInfo,
    activePlan,
    uploadProgress,
    isImageUploading,
    setTimeLeft,
    handleSubmit,
    formatIndianPrice,
    handlePlanChange,
    handleImageChange,
    handleUserInfoChange,
  };
};
export default useMakePayment;
