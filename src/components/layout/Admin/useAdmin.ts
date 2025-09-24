import {
  ProfileEditIcon,
  SpreadSheetIcon,
  SpreadSheetEditIcon,
} from "../../ui/Icons/SVG";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../utils/constants/app";
import type { Sidebarlink } from "../../../types/global";

const useAdmin = () => {
  const navigate = useNavigate();

  const [sidebarLinks] = useState<Sidebarlink[]>([
    {
      label: "Leads",
      url: PAGES.ADMIN_LEADS,
      icon: ProfileEditIcon,
      subLinks: [],
    },
    {
      label: "Business",
      url: PAGES.ADMIN_BUSINESS,
      icon: SpreadSheetEditIcon,
      subLinks: [],
    },
    {
      label: "Analytics",
      url: PAGES.ADMIN_ANALYTICS,
      icon: SpreadSheetIcon,
      subLinks: [],
    },
  ]);

  const { activeLink, activeSubLink, currentMainLink } = useMemo(() => {
    let activeLink = "";
    let activeSubLink = "";
    let currentMainLink = undefined;

    for (const link of sidebarLinks) {
      for (const sub of link?.subLinks) {
        if (location.pathname === sub.url) {
          activeLink = link.url;
          currentMainLink = link;
          activeSubLink = sub.url;
          break;
        }
      }
      if (activeLink) break;
    }

    return { activeLink, activeSubLink, currentMainLink };
  }, [location.pathname]);

  const handlelinkClick = (_mainUrl: string, subUrl: string) => {
    navigate(subUrl);
  };

  const [sideBarOpen, setSidebarOpen] = useState(true);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sideBarOpen);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  return {
    activeLink,
    sideBarOpen,
    sidebarLinks,
    activeSubLink,
    currentMainLink,
    notificationOpen,
    toggleSidebar,
    handlelinkClick,
    toggleNotification,
  };
};
export default useAdmin;
