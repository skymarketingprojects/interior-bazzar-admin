import AuthCard from "../../AuthCard";
import useProfile from "./useProfile";
import styles from "./Profile.module.css"
import { Button, Input } from "../../../ui";
import { STATIC_IMAGES } from "../../../../utils/constants/image";
const Profile = ({ incrementStep }: { incrementStep: () => void }) => {
    const { isImageUploading, uploadProgress, selectFile, CropperComponent, fileInputRef, formdata, handleChange, handleSubmit } = useProfile(incrementStep);

    return (
        <AuthCard title="Profile">
            <form onSubmit={handleSubmit} className={styles.form}>
                {formdata.profile_image_url === "" ?
                    <div
                        className={styles.uploadContainer}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <img
                            alt=""
                            className={styles.uploadImage}
                            src={STATIC_IMAGES.UPLOAD_ICON}
                        />
                        <span className={`${styles.uploadText}`}>Upload Image</span>
                    </div>
                    :
                    <div
                        className={styles.uploadContainer}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <img
                            alt={formdata.name}
                            src={formdata.profile_image_url}
                            className={styles.profileImage}
                        />
                        {isImageUploading && (
                            <div className={styles.progressOverlay}>
                                {uploadProgress}%
                            </div>
                        )}
                    </div>
                }
                <input
                    hidden
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={selectFile}
                    className={`${styles.input}`}
                />

                <Input
                    type="text"
                    id="name"
                    name="name"
                    className={`${styles.input}`}
                    placeholder="Name"
                    onChange={handleChange}
                    value={formdata.name}
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    className={`${styles.input}`}
                    placeholder="Email"
                    onChange={handleChange}
                    value={formdata.email}
                />
                <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`${styles.input}`}
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formdata.phone}
                />
                <Button variant="gradient" type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>
            {CropperComponent}
        </AuthCard>
    );
};

export default Profile;

