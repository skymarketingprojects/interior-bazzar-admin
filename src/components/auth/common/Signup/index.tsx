import useSignup from "./useSignup";
import AuthCard from "../../AuthCard";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css"
import { Button, Input } from "../../../ui";
import { PAGES } from "../../../../utils/constants/app";
import { USER_TYPES } from "../../../../utils/constants/app";
const Signup = ({ incrementStep }: { incrementStep: () => void }) => {
    const { formdata, handleChange, handleSubmit } = useSignup(incrementStep);
    return (
        <AuthCard title="Sign Up">
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    type="text"
                    name="username"
                    className={`${styles.input}`}
                    placeholder="Username"
                    onChange={handleChange}
                    value={formdata.username}
                />
                <Input
                    type="password"
                    name="password"
                    className={`${styles.input}`}
                    placeholder="Password"
                    onChange={handleChange}
                    value={formdata.password}
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    className={`${styles.input}`}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={formdata.confirmPassword}
                />

                <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>Signup as a</label>
                    <div className={styles.options}>
                        <div className={styles.radioContainer}>
                            <input
                                name="type"
                                type="radio"
                                id={USER_TYPES.BUSINESS}
                                value={USER_TYPES.BUSINESS}
                                onChange={handleChange}
                                checked={formdata.type === USER_TYPES.BUSINESS}
                            />
                            <label htmlFor={USER_TYPES.BUSINESS}>
                                Business
                            </label>
                        </div>
                        <div className={styles.radioContainer}>
                            <input
                                name="type"
                                type="radio"
                                id={USER_TYPES.USER}
                                value={USER_TYPES.USER}
                                onChange={handleChange}
                                checked={formdata.type === USER_TYPES.USER}
                            />
                            <label htmlFor={USER_TYPES.USER}>
                                User
                            </label>
                        </div>
                    </div>
                </div>
                <Button variant="gradient" type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>
            <p className={styles.footerText}>
                Already have an account? <Link to={PAGES.SIGN_IN}>Log in</Link>
            </p>
        </AuthCard>
    )
}
export default Signup;