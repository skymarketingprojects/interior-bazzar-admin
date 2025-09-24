import useAuth from "./useAuth";
import styles from "./Auth.module.css";
import { CloseIcon, } from "../../components/ui";
import Signin from "../../components/auth/common/Signin";
const SignInPage = () => {
    const {
        image,
        backButtonHandler,
    } = useAuth();
    return (
        <div className={`${styles.signupWrapper}`}>
            <CloseIcon onClick={backButtonHandler} className={`${styles.closeIcon}`} />
            <div className={`${styles.signupContainer}`}>
                <div className={`${styles.signupLeft}`}>
                    <div className={`${styles.imageContainer}`}>
                        <img src={image} alt="signin" className={`${styles.image}`} />
                    </div>
                </div>
                <div className={`${styles.signupRight}`}>
                    <h3 className={`${styles.signupHeading}`}>Sign In</h3>
                    <div className={`${styles.formContainer}`}>
                        <Signin />
                    </div>
                </div>
            </div>
        </div>

    );
};
export default SignInPage;