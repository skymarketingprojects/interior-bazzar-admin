import { useRef } from "react";
import styles from "./ImageUpload.module.css";
import useImageUpload from "./useImageUpload";
import { DeleteIcon } from "../../../components/ui";

const ImageUpload = () => {
    const {
        image,
        imageUrl,
        imageFile,
        selectFile,
        aspectRatio,
        aspectOptions,
        uploadProgress,
        CropperComponent,
        isImageUploading,
        copyToClipboard,
        handleImageUpload,
        deleteSelectedImage,
        handleAspectRatioChange,
    } = useImageUpload();

    const inputRef = useRef<HTMLInputElement>(null);
    const handleImageClick = () => inputRef.current?.click();



    return (
        <div className={styles.wrapper}>
            {/* Aspect ratio selector */}
            <div className={styles.selectorRow}>
                <label htmlFor="aspect">Aspect Ratio:</label>
                <div className={styles.selectWrapper}>
                    <select
                        id="aspect"
                        value={aspectRatio}
                        className={styles.select}
                        onChange={handleAspectRatioChange}
                    >
                        {aspectOptions.map((opt) => (
                            <option
                                key={opt.label} value={opt.value}
                            >
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <span className={styles.angleDown}>▼</span>
                </div>
            </div>

            {/* File input */}
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={selectFile}
            />

            {/* Image preview respecting aspect ratio */}
            <div
                className={styles.previewWrapper}
                style={{
                    paddingTop: `${100 / aspectRatio}%`,
                    cursor: image ? "default" : "pointer",
                }}
                onClick={!image ? handleImageClick : undefined}
            >
                {image ? (
                    <img src={image} alt="preview" className={styles.previewImage} />
                ) : (
                    <div className={styles.placeholder}>
                        <p>Click to select image</p>
                    </div>
                )}
                {image && <DeleteIcon onClick={deleteSelectedImage} className={styles.deleteIcon} />}
            </div>

            {/* Upload button */}
            <button onClick={handleImageUpload} className={styles.uploadButton}>
                {imageFile ? "Upload Image" : "Select Image to Upload"}
            </button>

            {/* Cropper */}
            {CropperComponent && (
                <div className={styles.cropperWrapper}>{CropperComponent}</div>
            )}

            {/* Upload progress */}
            {isImageUploading && (
                <div className={styles.progressBarWrapper}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${uploadProgress}%` }}
                    />
                </div>
            )}

            {/* URL copy */}
            {imageUrl && (
                <div className={styles.urlWrapper}>
                    <input type="text" value={imageUrl} readOnly className={styles.urlInput} />
                    <button onClick={copyToClipboard} className={styles.copyButton}>
                        Copy URL
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
