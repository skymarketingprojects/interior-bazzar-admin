import { useState } from "react";
import { logger } from "../../../../utils/logger";
import { useAlert } from "../../../../context/AlertContext";
import { ContactService } from "../../../../api/modules/conctact";
import { IMAGE_PURPOSE } from "../../../../utils/constants/app";
type FieldType = "text" | "email" | "phone" | "file" | "select";
import { useImageUploader } from "../../../../hooks/upload/useImageUploader";
import { QUERYTAGS } from "../../../../utils/constants/foms";
interface FieldConfig {
  name: string;
  type: FieldType;
  label: string;
  defaultValue?: any;
  options?: string[]; // only for select
}

const fieldConfigs: FieldConfig[] = [
  { name: "name", type: "text", label: "Full Name", defaultValue: "" },
  { name: "phone", type: "phone", label: "Phone", defaultValue: "" },
  { name: "mail", type: "email", label: "Email", defaultValue: "" },
  {
    name: "company",
    type: "text",
    label: "Company Name",
    defaultValue: "",
  },
  {
    name: "recognisation",
    type: "text",
    label: "Recognisation",
    defaultValue: "",
  },
  { name: "detail", type: "text", label: "Designation", defaultValue: "" },
  { name: "attachment", type: "file", label: "Designation", defaultValue: "" },
  {
    name: "tag",
    type: "select",
    label: "Lead Tags",
    defaultValue: "",
    options: QUERYTAGS,
  },
];

const useConnectForm = () => {
  // Initialize state based on config
  const initialState = fieldConfigs.reduce((acc, field) => {
    acc[field.name] = field.defaultValue ?? "";
    return acc;
  }, {} as Record<string, any>);
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { isImageUploading, uploadImage } = useImageUploader({
    forPurpose: IMAGE_PURPOSE.LEAD_QUERY_IMAGE,
    onUploadComplete: (url) => {
      setFormData((prev) => ({
        ...prev,
        attachment: url,
      }));
    },
  });
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      await uploadImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isImageUploading) {
        showAlert("Please wait image is uploading", "warning");
        return;
      }

      setLoading(true);
      const res = await ContactService.submitContactInfo(formData);
      if (!res.response) {
        showAlert("Error while submitting form", "error");
        return;
      }
      showAlert("Query submitted successfully", "success");
    } catch (e) {
      showAlert("Error while submitting form", "error");
      logger.error("Error while submitting form: ", e);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    fields: fieldConfigs,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useConnectForm;
