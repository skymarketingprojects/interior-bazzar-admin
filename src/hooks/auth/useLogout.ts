import { TokenService } from "../../api/apiService/authHelper/TokenService";
import { clearAuth } from "../../redux/slice/authSlice";
import { clearUser } from "../../redux/slice/userSlice";
import { useAppDispatch } from "../../redux/store/hook";
const useLogout = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(clearAuth());
    dispatch(clearUser());
    TokenService.clearTokens();
  };

  return { logout };
};

export default useLogout;
