import AuthCard from "../../AuthCard";
import useLocation from "./useLocation";
import styles from "./Location.module.css";
import { Button, Input } from "../../../ui";
const Location = ({ incrementStep }: { incrementStep: () => void }) => {
    const { formdata, handleChange, handleSubmit, handleskipClick } = useLocation(incrementStep);
    return (
        <AuthCard title="Location">
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={`${styles.inputsContainer}`}>
                    <Input
                        type="text"
                        id="country"
                        name="country"
                        className={`${styles.inputHalf}`}
                        placeholder="Country"
                        onChange={handleChange}
                        value={formdata.country}
                    />
                    <Input
                        id="state"
                        type="text"
                        name="state"
                        className={`${styles.inputHalf}`}
                        placeholder="State"
                        onChange={handleChange}
                        value={formdata.state}
                    />
                </div>
                <div className={`${styles.inputsContainer}`}>
                    <Input
                        type="text"
                        id="city"
                        name="city"
                        className={`${styles.inputHalf}`}
                        placeholder="City"
                        onChange={handleChange}
                        value={formdata.city}
                    />
                    <Input
                        type="text"
                        id="pin_code"
                        name="pin_code"
                        className={`${styles.inputHalf}`}
                        placeholder="Pincode"
                        onChange={handleChange}
                        value={formdata.pin_code}
                    />
                </div>
                <Input
                    type="text"
                    id="location_link"
                    name="location_link"
                    className={`${styles.input}`}
                    placeholder="Location Link"
                    onChange={handleChange}
                    value={formdata.location_link}
                />
                <Button variant="gradient" type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleskipClick} className={`${styles.navButton}`}>skip</button>
            </div>
        </AuthCard>
    );
};

export default Location;
