import { useState } from "react";
import { useImageCropper } from "../../../components/shared/ImageCropper/useImageCropper";
import { useImageUploader } from "../../../hooks/upload/useImageUploader";
import { IMAGE_PURPOSE } from "../../../utils/constants/app";
const ASPECT_RATIO_OPTIONS = [
  { label: "Square (1/1)", value: 1 / 1 },
  { label: "Wide (2/1)", value: 2 / 1 },
  { label: "Banner (3/1)", value: 3 / 1 },
  { label: "Cinema (2.5/1)", value: 2.5 / 1 },
  { label: "Ultra Wide (3.5/1)", value: 3.5 / 1 },
  { label: "Portrait (3/4)", value: 3 / 4 }, // ✅ extra
  { label: "Landscape (16/9)", value: 16 / 9 }, // ✅ extra
];
type ImagePurpose = keyof typeof IMAGE_PURPOSE;
const useImageUpload = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [purpose, setPurpose] = useState<ImagePurpose>("PROFILE_IMAGE");

  const handlePurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ImagePurpose;
    if (value in IMAGE_PURPOSE) {
      setPurpose(value);
    }
  };
  const [aspectRatio, setAspectRatio] = useState<number>(1 / 1);

  const { isImageUploading, uploadImage, uploadProgress } = useImageUploader({
    forPurpose: purpose,
    onUploadComplete: (url) => {
      setImageUrl(url);
      setImage(url);
    },
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
      await uploadImage(imageFile);
    }
    setImageFile(null);
  };

  return {
    image,
    imageUrl,
    purpose,
    imageFile,
    handlePurposeChange,
    setPurpose,
    aspectRatio,
    setAspectRatio,
    selectFile,
    uploadProgress,
    CropperComponent,
    isImageUploading,
    handleImageUpload,
    aspectOptions: ASPECT_RATIO_OPTIONS,
  };
};

export default useImageUpload;
