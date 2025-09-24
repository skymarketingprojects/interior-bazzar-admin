import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { LeftIcon, RightIcon } from "../../ui";
import { PAGES } from "../../../utils/constants/app";
import SidebarLink from "../AdminLayout/SidebarLink";
import type { Sidebarlink } from "../../../types/global";
import { STATIC_IMAGES } from "../../../utils/constants/image";
const Sidebar = ({
  links,
  activeLink,
  sidebarOpen,
  toggleSidebar,
}: {
  links: Sidebarlink[];
  activeLink: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {


  return (
    <aside
      className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed} `}
    >
      {/* Top */}
      <div className={`${styles.topContainer}`}>
        <div
          className={`${styles.top} ${sidebarOpen ? styles.open : styles.closedTop}`}
        >
          {sidebarOpen && (
            <Link
              to={PAGES.HOME}
              className={`${styles.logoContainer}`}
            >
              <img
                loading="lazy"
                alt="Interior Bazzar Logo"
                className={`${styles.logo}`}
                src={STATIC_IMAGES.LOGO}
              />

            </Link>
          )}
          <div className={styles.hamburger} onClick={toggleSidebar}>
            {sidebarOpen ? <LeftIcon /> : <RightIcon />}
          </div>
        </div>
      </div>

      <div className={`${styles.linksContainer} scrollbar-hidden `}>
        {links?.map((link, idx) => (
          <SidebarLink
            key={idx}
            item={link}
            style={{ radius: true, active: activeLink === link.url }}
            isOpen={sidebarOpen}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

