import { useState } from "react";
import {
  ContactIcon,
  LegalIcon,
  QnaIcon,
  LeadPolicyIcon,
  PaymentPolicyIcon,
  GiveReviewIcon,
  LinkIcon,
} from "../../components/ui/Icons/SVG";

const useFaq = () => {
  const [links] = useState([
    {
      id: 1,
      label: "Contact Us",
      icon: ContactIcon,
      value: "contactUs",
    },
    {
      id: 2,
      label: "Legal",
      icon: LegalIcon,
      value: "legal",
    },
    {
      id: 3,
      label: "Q & A",
      icon: QnaIcon,
      value: "qna",
    },
    {
      id: 4,
      label: "Feedback",
      icon: GiveReviewIcon,
      value: "feedback",
    },
    {
      id: 5,
      label: "Lead Policy",
      icon: LeadPolicyIcon,
      value: "leadPolicy",
    },
    {
      id: 6,
      label: "Payment Page",
      icon: PaymentPolicyIcon,
      value: "paymentPage",
    },
    {
      id: 7,
      label: "Important Links",
      icon: LinkIcon,
      value: "importantLinks",
    },
  ]);

  const [active, setActive] = useState(links[0].value);

  const onLinkClick = (value: string) => {
    setActive(value);
  };

  return { links, active, onLinkClick };
};

export default useFaq;
