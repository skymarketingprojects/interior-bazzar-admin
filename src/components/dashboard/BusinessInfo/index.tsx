import { useRef } from "react";
import styles from "./BusinessInfo.module.css"
import { STATIC_IMAGES } from "../../../utils/constants/image";
import { Button, Input } from "../../ui";
import useBusinessInfo from "./useBusinessInfo";
const BusinessInfo = () => {
    const {
        loading,
        businessData,
        CropperComponent,
        isImageUploading,
        selectFile,
        handleSubmit,
        handleInputChange, } = useBusinessInfo();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleImageClick = () => {
        inputRef.current?.click();
    };
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className={`container ${styles.container}`}>
            <h2 className={`${styles.title}`}>Business Details</h2>
            <div className={`${styles.header}`}>
                <Button
                    radius={true}
                    variant="gradient"
                    onClick={handleSubmit}
                    disabled={isImageUploading}
                    className={`${styles.saveButton}`}
                >
                    Save
                </Button>
            </div>
            <div className={`${styles.uploadIconContainer}`}>
                {
                    businessData.cover_image_url === ""
                        ?
                        <div onClick={handleImageClick} className={`${styles.uploadBox}`}>
                            <img className={`${styles.uploadIcon}`} src={STATIC_IMAGES.UPLOAD_ICON} alt="upload" />
                            <span className={`${styles.uploadText}`}>Upload Primary Image</span>
                        </div>
                        :
                        <div onClick={handleImageClick} className={`${styles.businessCoverContainer}`}>
                            <img className={`${styles.businessCover}`} src={businessData.cover_image_url} alt="upload" />
                        </div>
                }

            </div>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <input onChange={selectFile} ref={inputRef} type="file" hidden />

                <Input
                    type="text"
                    id="business_name"
                    name="business_name"
                    placeholder="Business Name"
                    onChange={handleInputChange}
                    value={businessData.business_name}
                />

                <Input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Business category"
                    onChange={handleInputChange}
                    value={businessData.category}
                />
                <Input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Business country"
                    onChange={handleInputChange}
                    value={businessData.country}
                />

                <Input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Business state"
                    onChange={handleInputChange}
                    value={businessData.state}
                />
                <Input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Business city"
                    onChange={handleInputChange}
                    value={businessData.city}
                />
                <Input
                    type="text"
                    id="pin_code"
                    name="pin_code"
                    placeholder="Business Pincode"
                    onChange={handleInputChange}
                    value={businessData.pin_code}
                />

                <Input
                    type="text"
                    id="gst"
                    name="gst"
                    placeholder="Business GST"
                    onChange={handleInputChange}
                    value={businessData.gst}
                />
                <Input
                    type="text"
                    id="since"
                    name="since"
                    placeholder="Business since"
                    onChange={handleInputChange}
                    value={businessData.since}
                />
                <Input
                    type="text"
                    id="youtube_link"
                    name="youtube_link"
                    placeholder="Business ytLink"
                    onChange={handleInputChange}
                    value={businessData.youtube_link}
                />

            </form>
            {CropperComponent}
        </div>
    );
};
export default BusinessInfo;