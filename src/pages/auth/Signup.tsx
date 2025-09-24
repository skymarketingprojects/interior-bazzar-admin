import useAuth from "./useAuth";
import styles from "./Auth.module.css";
import { CloseIcon, } from "../../components/ui";
import Info from "../../components/auth/business/Info";
import Signup from "../../components/auth/common/Signup";
import Other from "../../components/auth/business/Other";
import Profile from "../../components/auth/common/Profile";
import Location from "../../components/auth/business/Location";
const SignupPage = () => {
    const {
        step,
        image,
        incrementStep,
        backButtonHandler,
    } = useAuth();
    return (
        <div className={`${styles.signupWrapper}`}>
            <CloseIcon onClick={backButtonHandler} className={`${styles.closeIcon}`} />
            <div className={`${styles.signupContainer}`}>
                <div className={`${styles.signupLeft}`}>
                    <div className={`${styles.imageContainer}`}>
                        <img src={image} alt="signup" className={`${styles.image}`} />
                    </div>
                </div>
                <div className={`${styles.signupRight}`}>
                    <h3 className={`${styles.signupHeading}`}>
                        {step === 1 && "Sign Up"}
                        {step === 2 && "Profile"}
                        {step === 3 && "Business Info"}
                        {step === 4 && "Business Location"}
                        {step === 5 && "Other"}
                    </h3>
                    <div className={`${styles.formContainer}`}>
                        {step === 1 && <Signup incrementStep={incrementStep} />}
                        {/* for business */}
                        {step === 2 && <Profile incrementStep={incrementStep} />}
                        {step === 3 && <Info incrementStep={incrementStep} />}
                        {step === 4 && <Location incrementStep={incrementStep} />}
                        {step === 5 && <Other incrementStep={incrementStep} />}

                        {/* For user */}
                        {/* {step === 2 && <Profile />} */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignupPage;
