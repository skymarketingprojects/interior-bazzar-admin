import styles from "./Signin.module.css"
import { Button, Input } from "../../../ui";
import { Link } from "react-router-dom";
import { PAGES } from "../../../../utils/constants/app";
import AuthCard from "../../AuthCard";
import useSignin from "./useSignin";
const Signin = () => {
    const { formdata, handleChange, handleSignin } = useSignin();
    return (
        <AuthCard title="Sign In">
            <form onSubmit={handleSignin} className={styles.form}>
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
                <Link to={PAGES.FORGOT_PASSWORD} className={styles.forgotPasswordLink}>
                    Forgot Password?
                </Link>
                <Button variant="gradient" type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>

            <p className={styles.footerText}>
                Don't have an account? <Link to={PAGES.SIGN_UP}>Sign up</Link>
            </p>
        </AuthCard>
    )
}
export default Signin;