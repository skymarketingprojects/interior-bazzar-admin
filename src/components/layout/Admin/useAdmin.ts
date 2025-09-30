import {
  ProfileEditIcon,
  SpreadSheetIcon,
  SpreadSheetEditIcon,
} from "../../ui/Icons/SVG";
import { useMemo, useState } from "react";
import { PAGES } from "../../../utils/constants/app";
import type { Sidebarlink } from "../../../types/global";

const useAdmin = () => {
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
    {
      label: "Image Upload",
      url: PAGES.ADMIN_IMAGE_UPLOAD,
      icon: SpreadSheetIcon,
      subLinks: [],
    },
    {
      label: "Funnel Leads",
      url: PAGES.ADMIN_FUNNEL_LEADS,
      icon: SpreadSheetIcon,
      subLinks: [],
    },
  ]);

  const { activeLink } = useMemo(() => {
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

  const [sideBarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sideBarOpen);
  };

  return {
    activeLink,
    sideBarOpen,
    sidebarLinks,
    toggleSidebar,
  };
};
export default useAdmin;
