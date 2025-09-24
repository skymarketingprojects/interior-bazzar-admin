import { useAppSelector } from "../../../redux/store/hook";

const useUserMenu = () => {
  const auth = useAppSelector((state) => state.auth);
  const { user } = useAppSelector((state) => state.user);
  const { profile_image_url } = user || {};
  return {
    auth,
    profileImage: profile_image_url,
    isAuthenticated: auth.isAuthenticated,
  };
};
export default useUserMenu;
