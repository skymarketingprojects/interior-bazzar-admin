import { useState } from "react";
import { logger } from "../../../../utils/logger";
import { Validator } from "../../../../utils/Validator";
import { AuthService } from "../../../../api/modules/auth";
import { setAuth } from "../../../../redux/slice/authSlice";
import { useAlert } from "../../../../context/AlertContext";
import { AUTH_VARS, PAGES } from "../../../../utils/constants/app";
import { setUser } from "../../../../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/hook";
import { TokenService } from "../../../../api/apiService/authHelper/TokenService";
import { useNavigate } from "react-router-dom";
const useSignin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [formdata, setFormdata] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formdata.username) {
      showAlert("Cannt login without username: ", "warning");
      return;
    }
    if (!formdata.password) {
      showAlert("Cannt login without password ", "warning");
      return;
    }
    if (!Validator.validateUsername(formdata.username)) {
      showAlert("Invalid username", "warning");
      return;
    }
    if (!Validator.validatePassword(formdata.password)) {
      showAlert("Invalid Password", "warning");
      return;
    }
    try {
      const res = await AuthService.signin(formdata);
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
      dispatch(setUser(res.data.user));
      dispatch(setAuth({ isAuthenticated: true }));
      showAlert(res.message, "success");
      navigate(PAGES.ADMIN_LEADS);
    } catch (e) {
      showAlert("Error signing in", "error");
      logger.error("Error while signing in: ", e);
    }
  };

  return { formdata, handleChange, handleSignin };
};
export default useSignin;
