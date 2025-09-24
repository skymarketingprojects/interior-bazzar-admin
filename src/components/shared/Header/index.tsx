import useHeader from "./useHeader";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { PAGES } from "../../../utils/constants/app";
import { STATIC_IMAGES } from "../../../utils/constants/image";
import Usermenu from "../UserMenu";

const Header = () => {
  const { links } = useHeader();

  return (
    <div className={`${styles.headerWrapper}`}>
      <header className={`${styles.headerContainer}`}>
        <div className={`${styles.hamburgerContainer}`}></div>
        <div className={`${styles.logoContainer}`}>
          <Link to={PAGES.HOME}>
            <img
              alt="Interior Bazzar Logo"
              src={STATIC_IMAGES.LOGO}
              className={`${styles.logo}`}
            />
          </Link>
        </div>
        <div className={`${styles.navContainer}`}>
          <div>
            <Link
              to={PAGES.PLANS}
              className={`${styles.getBestPlanButton}`}
            >
              Get Best Plan
            </Link>
          </div>
          <div className={`${styles.navLinksContainer}`}>
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                className={({ isActive }) =>
                  `${styles.navLinkBase} ${isActive ? styles.activeNavLink : ""}`
                }
                to={link.url}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div>
            <Usermenu />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
