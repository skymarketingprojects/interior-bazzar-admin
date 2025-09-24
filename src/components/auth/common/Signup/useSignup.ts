import { useState } from "react";
import { logger } from "../../../../utils/logger";
import { Validator } from "../../../../utils/Validator";
import type { SignupForm } from "../../../../types/global";
import { AuthService } from "../../../../api/modules/auth";
import { useAlert } from "../../../../context/AlertContext";
import { TokenService } from "../../../../api/apiService/authHelper/TokenService";
import { AUTH_VARS } from "../../../../utils/constants/app";
// import { setAuth } from "../../../../redux/slice/authSlice";
// import { setUser } from "../../../../redux/slice/userSlice";
// import { useAppDispatch } from "../../../../redux/store/hook";
const useSignup = (incrementStep: () => void) => {
  // const dispatch = useAppDispatch();
  const { showAlert } = useAlert();
  const [formdata, setFormdata] = useState<SignupForm>({
    type: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Validator.validateUsername(formdata.username)) {
      showAlert("Invalid username", "warning");
      return;
    }
    if (!Validator.validatePassword(formdata.password)) {
      showAlert("Invalid Password", "warning");
      return;
    }
    if (formdata.password !== formdata.confirmPassword) {
      showAlert("Passwords don't match", "warning");
      return;
    }
    try {
      const res = await AuthService.signup(formdata);
      if (!res.response) {
        showAlert(res.message, "warning");
        return;
      }
      const access = res.data[AUTH_VARS.ACCESS];
      const refresh = res.data[AUTH_VARS.REFRESH];
      if (typeof access !== "string" || typeof refresh !== "string") {
        return;
      }
      TokenService.setTokens(access, refresh);
      // dispatch(setUser(res.data.user));
      // dispatch(setAuth({ isAuthenticated: true }));
      incrementStep();
    } catch (e) {
      logger.error("Error signing up", e);
      showAlert("Error signing up", "error");
    }
  };
  return { formdata, handleChange, handleSubmit };
};
export default useSignup;
