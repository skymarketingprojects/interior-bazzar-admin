import { useRef, useState } from "react";
import { useImageCropper } from "../../../shared/ImageCropper/useImageCropper";
import { useImageUploader } from "../../../../hooks/upload/useImageUploader";
import { UserService } from "../../../../api/modules/user";
import type { ProfileForm } from "../../../../types/global";
import { useAlert } from "../../../../context/AlertContext";
import { Validator } from "../../../../utils/Validator";
import { logger } from "../../../../utils/logger";
import { IMAGE_PURPOSE } from "../../../../utils/constants/app";
const useProfile = (incrementStep: () => void) => {
  const { showAlert } = useAlert();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formdata, setFormdata] = useState<ProfileForm>({
    name: "",
    email: "",
    phone: "",
    profile_image_url: "",
  });
  const setProfileImage = (url: string) => {
    setFormdata((prev) => ({ ...prev, profile_image_url: url }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const { isImageUploading, uploadProgress, uploadImage } = useImageUploader({
    forPurpose: IMAGE_PURPOSE.PROFILE_IMAGE,
    onUploadComplete: (url: string) => setProfileImage(url),
  });

  const { selectFile, CropperComponent } = useImageCropper({
    aspectRatio: 1 / 1,
    onCropped: async (file) => {
      const previewUrl = URL.createObjectURL(file);
      setProfileImage(previewUrl);
      await uploadImage(file);
      URL.revokeObjectURL(previewUrl);
    },
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isImageUploading) {
      return;
    }
    if (!formdata.name || !formdata.email || !formdata.phone) {
      showAlert("All fields are required", "warning");
      return;
    }
    if (!Validator.validateEmail(formdata.email)) {
      showAlert("Invalid email", "warning");
      return;
    }
    if (!Validator.validatePhone(formdata.phone)) {
      showAlert("Invalid phone number", "warning");
      return;
    }

    try {
      const res = await UserService.createProfile(formdata);
      if (!res.response) {
        showAlert(res.message, "warning");
        return;
      }
      incrementStep();
    } catch (e) {
      logger.error("Error creating profile", e);
      showAlert("Error creating profile", "error");
    }
  };
  return {
    uploadProgress,
    isImageUploading,
    formdata,
    fileInputRef,
    CropperComponent,
    selectFile,
    handleChange,
    handleSubmit,
  };
};

export default useProfile;
