import { useRef } from "react";
import useProfile from "./useProfiles";
import { Button, Input } from "../../ui";
import styles from "./Profile.module.css";
import { STATIC_IMAGES } from "../../../utils/constants/image";
const Profile = () => {
    const {
        loading,
        profile,
        isImageUploading,
        CropperComponent,
        selectFile,
        handleChange,
        handleSubmit
    } = useProfile();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleImageClick = () => {
        inputRef.current?.click();
    };
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className={`container ${styles.container}`}>
            <h2 className={`${styles.title}`}>Profile Details</h2>
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
                    profile.profile_image_url === "" ?
                        <div onClick={handleImageClick} className={`${styles.uploadBox}`}>
                            <img className={`${styles.uploadIcon}`} src={STATIC_IMAGES.UPLOAD_ICON} alt="upload" />
                            <span className={`${styles.uploadText}`}>Upload Primary Image</span>
                        </div>
                        :
                        <div onClick={handleImageClick} className={`${styles.profileImageContainer}`}>
                            <img className={`${styles.profileImage}`} src={profile.profile_image_url} alt="upload" />
                        </div>
                }
            </div>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <input onChange={selectFile} ref={inputRef} type="file" hidden />
                <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleChange}
                />
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    value={profile.email}
                    onChange={handleChange}
                />
                <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="phone"
                    value={profile.phone}
                    onChange={handleChange}
                />
                {/* <Button radius={true} disabled={isImageUploading} type="submit" variant="gradient">Submit</Button> */}
            </form>
            {CropperComponent}
        </div>
    )
}
export default Profile;