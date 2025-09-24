import Popover from "../Popover";
import { Link } from "react-router";
import useUserMenu from "./useUserMenu";
import styles from "./Usermenu.module.css";
import { PAGES } from "../../../utils/constants/app";
import { STATIC_IMAGES } from "../../../utils/constants/image";
import useLogout from "../../../hooks/auth/useLogout";
import { SpreadSheetIcon, DashboardIcon } from "../../ui/Icons/SVG"

const Usermenu = () => {
  const { logout } = useLogout();
  const { profileImage, isAuthenticated } = useUserMenu();
  if (!isAuthenticated) {
    return <Link to={PAGES.SIGN_UP} className={`${styles.loginButton}`} >Sign Up</Link>; // or handle unauthenticated state
  }

  return (
    <Popover>
      <Popover.Action>
        <img
          alt="user avatar"
          src={profileImage ? profileImage : STATIC_IMAGES.DEFAULT_AVATAR}
          className={`${styles.userAvatar}`}
        />
      </Popover.Action>
      <Popover.Content role="menu" aria-label="User menu">
        <div className={styles.usermenuContainer}>
          <ul className={styles.menuItems}>
            <li>
              <Link to={PAGES.ADMIN_PROFILE} className={styles.menuItem}>
                <span className={styles.iconContainer}>
                  <DashboardIcon className={`${styles.linkIcon}`} />
                </span>
                <span className={`${styles.linkText}`}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link to={PAGES.ADMIN_LEAD_DASHBOARD} className={styles.menuItem}>
                <span className={styles.iconContainer}>
                  <SpreadSheetIcon className={`${styles.linkIcon}`} />
                </span>
                <span className={`${styles.linkText}`}>
                  Lead Sheet
                </span>
              </Link>
            </li>

          </ul>
          <div className={styles.logout}>
            <button onClick={() => logout()} className={styles.logoutBtn}>Log Out</button>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
};
export default Usermenu;
