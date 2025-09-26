import styles from "./ImageUpload.module.css";
import useImageUpload from "./useImageUpload";
import { useRef } from "react";



const ImageUpload = () => {
    const {
        image,
        imageUrl,
        imageFile,
        selectFile,
        aspectRatio,
        aspectOptions,
        setAspectRatio,
        uploadProgress,
        CropperComponent,
        isImageUploading,
        handleImageUpload,
    } = useImageUpload();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleImageClick = () => inputRef.current?.click();
    const copyToClipboard = async () => {
        if (imageUrl) {
            await navigator.clipboard.writeText(imageUrl);
            alert("URL copied to clipboard!");
        }
    };

    return (
        <div className={styles.wrapper}>


            {/* Aspect Ratio Selector */}
            <div className={styles.selectorRow}>
                <label htmlFor="aspect">Aspect Ratio:</label>
                <div className={styles.selectWrapper}>
                    <select
                        id="aspect"
                        value={aspectRatio}
                        onChange={(e) => setAspectRatio(Number(e.target.value))}
                        className={styles.select}
                    >
                        {aspectOptions.map((opt) => (
                            <option key={opt.label} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <span className={styles.angleDown}>▼</span>
                </div>
            </div>
            {/* input */}
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={selectFile}
                className={styles.fileInput}
            />

            {image ? (
                <div className={styles.previewWrapper}>
                    <img src={image} alt="preview" className={styles.previewImage} />
                </div>
            ) : (
                <div className={styles.placeholder} onClick={handleImageClick} >
                    <p>Click to select image</p>
                </div>
            )}

            {/* Upload Button */}
            <button onClick={handleImageUpload} className={styles.uploadButton}>

                {imageFile ? "Upload Image" : "Select Image to Upload"}
            </button>

            {/* Cropper */}
            {CropperComponent && (
                <div className={styles.cropperWrapper}>{CropperComponent}</div>
            )}

            {/* Upload Progress */}
            {isImageUploading && (
                <div className={styles.progressBarWrapper}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${uploadProgress}%` }}
                    />
                </div>
            )}

            {/* URL + Copy */}
            {imageUrl && (
                <div className={styles.urlWrapper}>
                    <input
                        type="text"
                        value={imageUrl}
                        readOnly
                        className={styles.urlInput}
                    />
                    <button onClick={copyToClipboard} className={styles.copyButton}>
                        Copy URL
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImageUpload;