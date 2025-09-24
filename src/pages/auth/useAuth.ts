import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../utils/constants/app";
import { useAlert } from "../../context/AlertContext";
import { getMessage } from "../../utils/helper/getMessage";
import { STATIC_IMAGES } from "../../utils/constants/image";

const useAuth = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [step, setStep] = useState(1);

  const backButtonHandler = () => {
    if (step > 1) {
      decrementStep();
    } else {
      navigate(PAGES.HOME);
    }
  };

  const incrementStep = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    } else {
      showAlert(getMessage("STEPS_MAX_AUTH"), "info");
    }
  };

  const decrementStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      showAlert(getMessage("STEPS_MIN_AUTH"), "info");
    }
  };

  return {
    step,
    image: STATIC_IMAGES.SIGNINPAGE,
    incrementStep,
    decrementStep,
    backButtonHandler,
  };
};

export default useAuth;
