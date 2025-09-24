import { Button } from "../../ui";
import styles from "./AuthRequired.module.css"
const AuthRequired = ({ handleSignUpClick, closeModal }: { handleSignUpClick: () => void, closeModal: () => void }) => {
    const clickHandler = () => {
        closeModal();
        handleSignUpClick();
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Authentication Required</h2>
                <p className={styles.message}>
                    You need to sign in or create an account to perform this operation.
                </p>
                <Button variant="gradient" radius onClick={clickHandler}>
                    Go to Sign Up
                </Button>
            </div>
        </div >
    )
};
export default AuthRequired;