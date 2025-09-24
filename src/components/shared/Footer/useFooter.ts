import { useState } from "react";
// import { logger } from "../../../utils/logger";
import { Validator } from "../../../utils/Validator";
import { useAlert } from "../../../context/AlertContext";
// import { CommonService } from "../../../api/modules/common";
import { getMessage } from "../../../utils/helper/getMessage";
import { PAGES } from "../../../utils/constants/app";

const useFooter = () => {
  const { showAlert } = useAlert();
  const footerLinks = [
    { label: "Privacy Policy", link: PAGES.PRIVACYPOLICY },
    { label: "Return & Refund", link: PAGES.RETURNANDREFUND },
    { label: "Terms and Conditions", link: PAGES.TERMSANDCONDITION },
    { label: "Disclaimer", link: PAGES.DISCLAIMER },
  ];

  const categories = [
    {
      title: "Real Estate",
      items: [
        { label: "FlatBecho Agent", link: "/real-estate/flatbecho-agent" },
        { label: "DealCloser AI", link: "/real-estate/dealcloser-ai" },
        {
          label: "PropertyLead Genie",
          link: "/real-estate/propertylead-genie",
        },
        {
          label: "MakaanManager Agent",
          link: "/real-estate/makaanmanager-agent",
        },
        { label: "EstateBuddy AI", link: "/real-estate/estatebuddy-ai" },
      ],
    },
    {
      title: "Interior Designer",
      items: [
        { label: "DecoLead AI", link: "/interior/designer/decolead-ai" },
        {
          label: "DesignDeal Agent",
          link: "/interior/designer/designdeal-agent",
        },
        { label: "RoomRanger AI", link: "/interior/designer/roomranger-ai" },
        {
          label: "SpacePitch Agent",
          link: "/interior/designer/spacepitch-agent",
        },
        { label: "VastuVista AI", link: "/interior/designer/vastuvista-ai" },
      ],
    },
    {
      title: "Gyms & Fitness",
      items: [
        { label: "BeautyBook AI", link: "/fitness/beautybook-ai" },
        { label: "GlamGenie Agent", link: "/fitness/glamgenie-agent" },
        { label: "SalonSathi AI", link: "/fitness/salonsathi-ai" },
        { label: "GlowTrack AI", link: "/fitness/glowtrack-ai" },
        { label: "StyleSuite Agent", link: "/fitness/stylesuite-agent" },
      ],
    },
    {
      title: "Real Estate",
      items: [
        { label: "FlatBecho Agent", link: "/real-estate/flatbecho-agent" },
        { label: "DealCloser AI", link: "/real-estate/dealcloser-ai" },
        {
          label: "PropertyLead Genie",
          link: "/real-estate/propertylead-genie",
        },
        {
          label: "MakaanManager Agent",
          link: "/real-estate/makaanmanager-agent",
        },
        { label: "EstateBuddy AI", link: "/real-estate/estatebuddy-ai" },
      ],
    },
    {
      title: "Interior Designer",
      items: [
        { label: "DecoLead AI", link: "/interior/designer/decolead-ai" },
        {
          label: "DesignDeal Agent",
          link: "/interior/designer/designdeal-agent",
        },
        { label: "RoomRanger AI", link: "/interior/designer/roomranger-ai" },
        {
          label: "SpacePitch Agent",
          link: "/interior/designer/spacepitch-agent",
        },
        { label: "VastuVista AI", link: "/interior/designer/vastuvista-ai" },
      ],
    },
    {
      title: "Gyms & Fitness",
      items: [
        { label: "BeautyBook AI", link: "/fitness/beautybook-ai" },
        { label: "GlamGenie Agent", link: "/fitness/glamgenie-agent" },
        { label: "SalonSathi AI", link: "/fitness/salonsathi-ai" },
        { label: "GlowTrack AI", link: "/fitness/glowtrack-ai" },
        { label: "StyleSuite Agent", link: "/fitness/stylesuite-agent" },
      ],
    },
    {
      title: "Interior Designer",
      items: [
        { label: "DecoLead AI", link: "/interior/designer/decolead-ai" },
        {
          label: "DesignDeal Agent",
          link: "/interior/designer/designdeal-agent",
        },
        { label: "RoomRanger AI", link: "/interior/designer/roomranger-ai" },
        {
          label: "SpacePitch Agent",
          link: "/interior/designer/spacepitch-agent",
        },
        { label: "VastuVista AI", link: "/interior/designer/vastuvista-ai" },
      ],
    },
    {
      title: "Gyms & Fitness",
      items: [
        { label: "BeautyBook AI", link: "/fitness/beautybook-ai" },
        { label: "GlamGenie Agent", link: "/fitness/glamgenie-agent" },
        { label: "SalonSathi AI", link: "/fitness/salonsathi-ai" },
        { label: "GlowTrack AI", link: "/fitness/glowtrack-ai" },
        { label: "StyleSuite Agent", link: "/fitness/stylesuite-agent" },
      ],
    },
  ];

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      showAlert(getMessage("EMAIL_EMPTY"), "warning");
      return;
    }
    if (!Validator.validateEmail(email)) {
      showAlert(getMessage("EMAIL_INVALID"), "warning");
      return;
    }
    // try {
    //   const res = await CommonService.subscribeToNewsletter(email);
    //   if (!res.response) {
    //     showAlert(getMessage("GENERIC"), "error");
    //     return;
    //   }
    //   showAlert(getMessage("SUBSCRIBE_SUCCESS"), "success");
    //   setEmail("");
    // } catch (error) {
    //   // Handle error appropriately, e.g., show an alert or log the error
    //   showAlert(getMessage("GENERIC"), "error");
    //   logger.error("Error subscribing to newsletter", error);
    // }
  };

  return {
    email,
    categories,
    footerLinks,
    handleSubmit,
    handleEmailChange,
  };
};

export default useFooter;
