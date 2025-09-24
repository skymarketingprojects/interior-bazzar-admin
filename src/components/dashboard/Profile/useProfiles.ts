import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { UserService } from "../../../api/modules/user";
import { useAlert } from "../../../context/AlertContext";
import { IMAGE_PURPOSE } from "../../../utils/constants/app";
import { useImageUploader } from "../../../hooks/upload/useImageUploader";
import { useImageCropper } from "../../shared/ImageCropper/useImageCropper";

const useProfile = () => {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    profile_image_url: "",
  });
  const setProfileImage = (url: string) => {
    setProfile((prev) => ({ ...prev, profile_image_url: url }));
  };
  const { isImageUploading, uploadImage, uploadProgress } = useImageUploader({
    forPurpose: IMAGE_PURPOSE.PROFILE_IMAGE,
    onUploadComplete: (url) => {
      setProfileImage(url);
    },
  });
  const { CropperComponent, selectFile } = useImageCropper({
    aspectRatio: 1 / 1,
    onCropped: async (file) => {
      const previewUrl = URL.createObjectURL(file);
      setProfileImage(previewUrl);
      uploadImage(file);
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await UserService.createProfile(profile);
      if (!res.response) {
        showAlert(res.message, "warning");
      }
      setProfile(res.data);
    } catch (err) {}
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await UserService.getProfile();
      if (!res.response) {
        showAlert(res.message, "warning");
      }
      setProfile(res.data);
    } catch (error) {
      logger.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    loading,
    profile,
    uploadProgress,
    isImageUploading,
    CropperComponent,
    selectFile,
    handleChange,
    handleSubmit,
  };
};
export default useProfile;
