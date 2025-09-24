import styles from "./Other.module.css"

import { Button, Input } from "../../../ui";
import { STATIC_IMAGES } from "../../../../utils/constants/image";
import { Textarea } from "../../../ui/InputField";
import AuthCard from "../../AuthCard";
import useOther from "./useOther";
const Other = ({ incrementStep }: { incrementStep: () => void }) => {
    const {
        formdata,
        fileInputRef,
        CropperComponent,
        isImageUploading,
        handleSubmit,
        selectFile,
        handleSkip,
        handleChange,
    } = useOther(incrementStep);
    return (
        <AuthCard title="Other Info">
            <form onSubmit={handleSubmit} className={styles.form}>
                {
                    formdata.cover_image_url === "" ?
                        <div
                            className={styles.uploadContainer}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <img
                                alt="upload image icon"
                                className={styles.uploadImage}
                                src={STATIC_IMAGES.UPLOAD_ICON}
                            />
                            <span className={`${styles.uploadText}`}>Upload Image</span>
                        </div>
                        :
                        <div
                            className={styles.coverImageContainer}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <img
                                alt="upload image icon"
                                className={styles.coverImage}
                                src={formdata.cover_image_url}
                            />

                        </div>
                }
                <input
                    hidden
                    type="file"
                    ref={fileInputRef}
                    onChange={selectFile}
                    className={`${styles.input}`}
                />

                <div className={`${styles.inputsContainer}`}>
                    <Input
                        type="text"
                        id="since"
                        name="since"
                        onChange={handleChange}
                        placeholder="Establish Year"
                        className={`${styles.inputHalf}`}
                        value={formdata.since}
                    />
                    <Input
                        id="gst"
                        name="gst"
                        type="text"
                        placeholder="GST"
                        value={formdata.gst}
                        onChange={handleChange}
                        className={`${styles.inputHalf}`}
                    />
                </div>
                <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Bio"
                    value={formdata.bio}
                    onChange={handleChange}
                    className={`${styles.textarea}`}
                />
                <Button disabled={isImageUploading} variant="gradient" type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleSkip} className={`${styles.navButton}`}>skip</button>
            </div>
            {CropperComponent}
        </AuthCard>
    );
};

export default Other;
