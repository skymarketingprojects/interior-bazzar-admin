import { useState } from "react";
import { useAlert } from "../../context/AlertContext";
import { CommonService } from "../../api/modules/common";
import { logger } from "../../utils/logger";

interface UseImageUploaderProps {
  forPurpose: string;
  onUploadComplete?: (url: string) => void;
}

export const useImageUploader = ({
  forPurpose,
  onUploadComplete,
}: UseImageUploaderProps) => {
  const { showAlert } = useAlert();
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      setIsImageUploading(true);

      const res = await CommonService.getUploadUrl({
        fileName: file.name,
        fileType: file.type,
        for: forPurpose,
      });

      if (!res.response) {
        showAlert(res.message || "Failed to get upload URL", "error");
        return null;
      }
      const { uploadUrl, fileUrl } = res.data;

      // await CommonService.uploadToS3(uploadUrl, file);
      await CommonService.uploadToS3WithProgress(uploadUrl, file, (percent) => {
        setUploadProgress(percent);
      });

      onUploadComplete?.(fileUrl);
      return fileUrl;
    } catch (error) {
      logger.error("Image upload error:", error);
      showAlert("Image upload failed", "error");
      return null;
    } finally {
      setIsImageUploading(false);
    }
  };

  return {
    uploadImage,
    uploadProgress,
    isImageUploading,
  };
};
