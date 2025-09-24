import { useRef, useState } from "react";
import { useImageCropper } from "../../../shared/ImageCropper/useImageCropper";
import { useImageUploader } from "../../../../hooks/upload/useImageUploader";
import { useAlert } from "../../../../context/AlertContext";
import { IMAGE_PURPOSE, PAGES } from "../../../../utils/constants/app";
import { BusinessService } from "../../../../api/modules/business";
import { useNavigate } from "react-router-dom";
const useOther = (incrementStep: () => void) => {
  const { showAlert } = useAlert();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formdata, setFormdata] = useState<{
    cover_image_url: string;
    since: string;
    gst: string;
    bio: string;
  }>({
    cover_image_url: "",
    since: "",
    gst: "",
    bio: "",
  });
  const navigate = useNavigate();
  const { isImageUploading, uploadProgress, uploadImage } = useImageUploader({
    forPurpose: IMAGE_PURPOSE.BUSINESS_PRIMARY_IMAGE,
    onUploadComplete: (url: string) => {
      setFormdata((prev) => ({ ...prev, cover_image_url: url }));
    },
  });
  const { CropperComponent, selectFile } = useImageCropper({
    aspectRatio: 2 / 1,
    onCropped: async (file) => {
      const previewUrl = URL.createObjectURL(file);
      setFormdata((prev) => ({ ...prev, cover_image_url: previewUrl }));
      await uploadImage(file);
      URL.revokeObjectURL(previewUrl);
    },
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSkip = () => {
    navigate(PAGES.ADMIN_PROFILE);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formdata.cover_image_url) {
      showAlert("Cover image is required", "warning");
      return;
    }
    try {
      const res = await BusinessService.updateBusiness(formdata);
      if (!res.response) {
        showAlert(res.message, "warning");
        return;
      }
      navigate(PAGES.ADMIN_PROFILE);
    } catch (e) {
      console.log(e);
      showAlert("Error updating info", "error");
    }
  };
  const handlesomething = () => {
    incrementStep();
  };
  return {
    formdata,
    fileInputRef,
    handlesomething,
    uploadProgress,
    CropperComponent,
    isImageUploading,
    selectFile,
    handleSkip,
    handleChange,
    handleSubmit,
  };
};

export default useOther;
