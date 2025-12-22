import { useState } from "react";
import { useImageCropper } from "../../../components/shared/ImageCropper/useImageCropper";
import { useImageUploader } from "../../../hooks/upload/useImageUploader";
import { useAlert } from "../../../context/AlertContext";
const ASPECT_RATIO_OPTIONS = [
  { label: "Square (1/1)", value: 1 / 1 },
  { label: "Wide (2/1)", value: 2 / 1 },
  { label: "Banner (3/1)", value: 3 / 1 },
  { label: "Cinema (2.5/1)", value: 2.5 / 1 },
  { label: "Ultra Wide (3.5/1)", value: 3.5 / 1 },
  { label: "Portrait (3/4)", value: 3 / 4 },
  { label: "Landscape (16/9)", value: 16 / 9 },
  { label: "Banner (950×250)", value: 3.8 / 1 }
];

const useImageUpload = () => {
  const { showAlert } = useAlert();
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [aspectRatio, setAspectRatio] = useState<number>(1 / 1);

  const handleAspectRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setAspectRatio(Number(value));
  };

  const { isImageUploading, uploadImage, uploadProgress } = useImageUploader({
    forPurpose: "StockMedia",
  });

  const { CropperComponent, selectFile } = useImageCropper({
    aspectRatio,
    onCropped: async (file) => {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
      setImageFile(file);
    },
  });

  const handleImageUpload = async () => {
    if (imageFile) {
      const uploadUrl = await uploadImage(imageFile);
      if (!uploadUrl) {
        showAlert("Image upload failed", "error");

        return;
      }
      setImageUrl(uploadUrl);
      setImage(uploadUrl);
    }
    setImageFile(null);
  };

  const copyToClipboard = async () => {
    if (imageUrl) {
      await navigator.clipboard.writeText(imageUrl);
      showAlert("URL copied to clipboard!", "success");
    }
  };

  const deleteSelectedImage = () => {
    setImage("");
    setImageUrl("");
    setImageFile(null);
  };

  return {
    image,
    imageUrl,
    imageFile,
    selectFile,
    aspectRatio,
    setAspectRatio,
    uploadProgress,
    copyToClipboard,
    CropperComponent,
    isImageUploading,
    handleImageUpload,
    deleteSelectedImage,
    handleAspectRatioChange,
    aspectOptions: ASPECT_RATIO_OPTIONS,
  };
};

export default useImageUpload;
