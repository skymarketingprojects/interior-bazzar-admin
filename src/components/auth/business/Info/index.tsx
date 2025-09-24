import useInfo from "./useInfo";
import AuthCard from "../../AuthCard";
import styles from "./Info.module.css";
import { Button, Input } from "../../../ui";
const Info = ({ incrementStep }: { incrementStep: () => void }) => {
    const { formdata, handleChange, handleSubmit } = useInfo(incrementStep);
    return (
        <AuthCard title="Business Info">
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    type="text"
                    id="business_name"
                    name="business_name"
                    className={`${styles.input}`}
                    placeholder="Business Name"
                    onChange={handleChange}
                    value={formdata.business_name}
                />
                <Input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    value={formdata.category}
                    className={`${styles.input}`}
                />
                <Input
                    type="text"
                    id="segment"
                    name="segment"
                    placeholder="Segment"
                    onChange={handleChange}
                    value={formdata.segment}
                    className={`${styles.input}`}
                />
                <Button variant="gradient" type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>
        </AuthCard>
    );
};

export default Info;
