import { useState, type FormEvent } from "react";
import type { AdminLeadFormType } from "../../../../../types/content";
import {
  PRIORITIES,
  STATUS,
  TAGS,
  tagsOptions,
  statusOptions,
  priorityOptions,
} from "../../../../../utils/constants/app";
import { logger } from "../../../../../utils/logger";
const defaultForm: AdminLeadFormType = {
  id: 0,
  name: "",
  phone: "",
  email: "",
  interested: "",
  query: "",
  city: "",
  state: "",
  country: "",
  status: "crack",
  tag: "aifiltered",
  remark: "",
  priority: "high",
};

const useLeadForm = (
  lead: AdminLeadFormType | undefined,
  onsubmit: (data: AdminLeadFormType) => void
) => {
  const [formData, setFormData] = useState<AdminLeadFormType>(() => {
    if (lead) {
      return {
        id: lead.id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        interested: lead.interested,
        query: lead.query,
        city: lead.city,
        state: lead.city,
        country: lead.country,
        status: lead.status,
        tag: lead.tag,
        remark: lead.remark,
        priority: lead.priority,
      };
    }
    return defaultForm;
  });
  const handleLeadChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    logger.log("this is formdata: ", formData);
    onsubmit(formData);
  };
  return {
    formData,
    handleSubmit,
    handleLeadChange,
    PRIORITIES,
    STATUS,
    TAGS,
    tagsOptions,
    statusOptions,
    priorityOptions,
  };
};
export default useLeadForm;
