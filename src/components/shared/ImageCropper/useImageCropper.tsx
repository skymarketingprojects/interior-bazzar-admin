import { useState } from "react";
import ImageCropper from "./index";

type UseImageCropperProps = {
  aspectRatio?: number;
  onCropped: (file: File) => void;
};

export const useImageCropper = ({
  aspectRatio = 1,
  onCropped,
}: UseImageCropperProps) => {
  const [file, setFile] = useState<File | null>(null);

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  };

  const cancelCrop = () => {
    setFile(null);
  };

  const handleCrop = (cropped: File) => {
    setFile(null);
    onCropped(cropped);
  };

  const CropperComponent = file ? (
    <ImageCropper
      file={file}
      onCrop={handleCrop}
      onCancel={cancelCrop}
      aspectRatio={aspectRatio}
    />
  ) : null;

  return { selectFile, CropperComponent };
};
