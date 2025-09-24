import { useEffect, useState } from "react";
import { logger } from "../../../utils/logger";
import { useAlert } from "../../../context/AlertContext";
import { IMAGE_PURPOSE } from "../../../utils/constants/app";
import { BusinessService } from "../../../api/modules/business";
import { useImageUploader } from "../../../hooks/upload/useImageUploader";
import { useImageCropper } from "../../shared/ImageCropper/useImageCropper";

const useBusinessInfo = () => {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(true);
  const [businessData, setBusinessData] = useState({
    gst: "",
    city: "",
    state: "",
    since: "",
    country: "",
    category: "",
    pin_code: "",
    youtube_link: "",
    business_name: "",
    cover_image_url: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await BusinessService.updateBusiness(businessData);
      if (!res.response) {
        showAlert(res.message, "warning");
        return;
      }
      showAlert(res.message, "success");
      setBusinessData(res.data);
    } catch (err) {
      showAlert("Failed to update information", "error");
      console.log(err);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const setCoverImageUrl = (url: string) => {
    setBusinessData((prev) => ({ ...prev, cover_image_url: url }));
  };

  const { isImageUploading, uploadImage, uploadProgress } = useImageUploader({
    forPurpose: IMAGE_PURPOSE.BUSINESS_PRIMARY_IMAGE,
    onUploadComplete: (url) => {
      setCoverImageUrl(url);
    },
  });
  const { CropperComponent, selectFile } = useImageCropper({
    aspectRatio: 2 / 1,
    onCropped: async (file) => {
      const previewUrl = URL.createObjectURL(file);
      setCoverImageUrl(previewUrl);
      uploadImage(file);
    },
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await BusinessService.getBusinessDashboardData();
      if (!res.response) {
        showAlert(res.message, "warning");
      }
      setBusinessData(res.data);
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
    isImageUploading,
    uploadImage,
    CropperComponent,
    selectFile,
    uploadProgress,
    businessData,
    handleSubmit,
    handleInputChange,
  };
};
export default useBusinessInfo;
