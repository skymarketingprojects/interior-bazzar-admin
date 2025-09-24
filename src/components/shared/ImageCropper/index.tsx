import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import styles from "./ImageCroper.module.css"
import { Button } from "../../ui";

type ImageCropperProps = {
    file: File | null;
    onCancel?: () => void;
    onCrop: (croppedFile: File) => void;
    aspectRatio?: number;
};

const ImageCropper: React.FC<ImageCropperProps> = ({
    file,
    onCancel,
    onCrop,
    aspectRatio = 1,
}) => {
    const cropperRef = useRef<HTMLImageElement>(null);

    if (!file) return null;

    const handleCrop = () => {
        const cropper = (cropperRef.current as any)?.cropper;
        if (!cropper) return;

        cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
            if (!blob) return;
            const croppedFile = new File([blob], file.name, { type: file.type });
            onCrop(croppedFile);
        }, file.type);
    };

    const imageURL = URL.createObjectURL(file);

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContainer}>
                <Cropper
                    src={imageURL}
                    className={styles.cropper}
                    aspectRatio={aspectRatio}
                    guides={true}
                    ref={cropperRef}
                    viewMode={1}
                />
                <div className={styles.modalActions}>
                    <Button variant="delete" onClick={onCancel} className={styles.modalButton}>
                        Cancel
                    </Button>
                    <Button variant="edit" onClick={handleCrop} className={styles.modalButton}>
                        Crop
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;
