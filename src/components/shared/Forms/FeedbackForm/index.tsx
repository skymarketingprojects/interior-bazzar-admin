
import { Button } from "../../../ui";
import styles from "./FeedbackForm.module.css";
import { StarIcon } from "../../../ui";
import useFeedback from "./useFeedbackForm";
import { useModal } from "../../../../context/ModalContext";
import AuthRequired from "../../../auth/AuthRequired";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../../utils/constants/app";
const FeedbackForm = () => {
    const { showModal, closeModal } = useModal();
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate(PAGES.SIGN_UP);
    }
    const {
        ratings,
        questions,
        isAuthenticated,
        handleRating,
        handleSubmit,
    } = useFeedback();
    const handleSubmitFeedback = (e: React.FormEvent) => {
        e.preventDefault();
        if (isAuthenticated) {
            handleSubmit(e);
        }
        else {
            showModal(<AuthRequired handleSignUpClick={handleSignUpClick} closeModal={closeModal} />)
        }
    }


    return (
        <form className={styles.container} onSubmit={handleSubmitFeedback}>
            <h2 className={styles.title}>Feedback</h2>
            {questions.map((q, index) => (
                <div key={index} className={styles.questionBlock}>
                    <p className={styles.question}>{q}</p>
                    <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`${styles.star} ${star <= ratings[index] ? styles.filled : ""
                                    }`}
                                onClick={() => handleRating(index, star)}
                            >
                                <StarIcon />
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            <Button radius variant="gradient" type="submit" >
                Submit Feedback
            </Button>
        </form>
    );
};

export default FeedbackForm;
