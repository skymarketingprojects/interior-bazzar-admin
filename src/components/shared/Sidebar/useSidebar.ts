import { TbForms } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { SiWebflow, SiFramer } from "react-icons/si";
import type { SidebarSection } from "../../../types/propTypes";
import { useState } from "react";
import { useAppSelector } from "../../../redux/store/hook";
const useSidebar = () => {
  const { user } = useAppSelector((state) => state.user);
  const { id, name, email, phone, username, role, profile_image_url } =
    user || {};
  const sidebarItemsMerchant: SidebarSection[] = [
    {
      title: "Features",
      items: [
        {
          label: "Dashboard",
          icon: AiFillDashboard,
          url: "/dashboard",
        },
        {
          label: "Lead Forms",
          icon: BsFillGridFill,
          submenuKey: "lead-forms",
          children: [
            {
              label: "Choose a lead form",
              url: "/dashboard/lead-form/choose-form",
            },
            {
              label: "Edit a lead form",
              url: "/dashboard/lead-form/edit-form",
            },
            {
              label: "See your Lead form",
              url: "/dashboard/lead-form/see-form",
            },
          ],
        },
        {
          label: "Lead Nurture",
          icon: TbForms,
          submenuKey: "lead-nurture",
          children: [
            { label: "See all your leads", url: "/dashboard/see-all-leads" },

            { label: "Follow up your leads", url: "/dashboard/follow-up" },
          ],
        },
      ],
    },
    {
      title: "Products",
      items: [],
    },
    {
      title: "Information Edit",
      items: [
        {
          label: "Personal Info",
          icon: SiWebflow,
          url: "/dashboard/personal-info",
        },
        {
          label: "Business Info",
          icon: SiFramer,
          submenuKey: "business-info",
          children: [],
        },
      ],
    },
  ];

  // const sidebarItemsEmployee: SidebarSection[] = [
  //   {
  //     title: "Features",
  //     items: [
  //       {
  //         label: "Dashboard",
  //         icon: AiFillDashboard,
  //         url: "/dashboard",
  //       },
  //       {
  //         label: "Lead Forms",
  //         icon: BsFillGridFill,
  //         submenuKey: "lead-forms",
  //         children: [
  //           { label: "See all your leads", url: "/dashboard/see-all-leads" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Information Edit",
  //     items: [
  //       {
  //         label: "Personal Info",
  //         icon: SiWebflow,
  //         url: "/dashboard/personal-info",
  //       },
  //       {
  //         label: "Document Info",
  //         icon: SiFramer,
  //         url: "/dashboard/document-info",
  //       },
  //     ],
  //   },
  // ];
  // const sidebarItemsClient: SidebarSection[] = [
  //   {
  //     title: "Features",
  //     items: [
  //       {
  //         label: "Dashboard",
  //         icon: AiFillDashboard,
  //         url: "/dashboard",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Information Edit",
  //     items: [
  //       {
  //         label: "Personal Info",
  //         icon: SiWebflow,
  //         url: "/dashboard/personal-info",
  //       },
  //     ],
  //   },
  // ];

  const [isOpen, setIsOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    if (openMenu === menu) {
      // Trigger exit animation
      setIsExiting(menu);
      setTimeout(() => {
        setOpenMenu(null);
        setIsExiting(null);
      }, 200); // Match slideOut duration
    } else {
      setOpenMenu(menu);
      setIsExiting(null);
    }
  };

  const sidebar = sidebarItemsMerchant;

  return {
    id,
    name,
    email,
    phone,
    username,
    role,
    profile_image_url,

    //old ones are here
    sidebar,
    isOpen,
    setIsOpen,
    openMenu,
    isExiting,
    toggleSubmenu,
  };
};
export default useSidebar;
