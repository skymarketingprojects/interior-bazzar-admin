import { useState } from "react";
import styles from "./Messages.module.css"
import { CONTACTS } from "../../../../utils/constants/contact";
import ChatBot from "../ChatBot";
const Messages = () => {
    const [isVisible, setIsVisible] = useState(true);//make it false by default
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
    const questions = [
        {
            text: "What is human filtered lead?",
            whatsappLink: `https://wa.me/+91${CONTACTS.PHONE1}?text=What%20is%20a%20human%20filtered%20lead%3F`
        },
        {
            text: "How does Interior Bazzar ensure lead quality?",
            whatsappLink: `https://wa.me/+91${CONTACTS.PHONE1}?text=How%20does%20Interior%20Bazzar%20ensure%20lead%20quality%3F`
        },
        {
            text: "What makes Interior Bazzar different?",
            whatsappLink: `https://wa.me/+91${CONTACTS.PHONE1}?text=What%20makes%20Interior%20Bazzar%20different%3F`
        },
        {
            text: "Who can join Interior Bazzar?",
            whatsappLink: `https://wa.me/+91${CONTACTS.PHONE1}?text=Who%20can%20join%20Interior%20Bazzar%3F`
        },
        {
            text: "Is it available across India?",
            whatsappLink: `https://wa.me/+91${CONTACTS.PHONE1}?text=Is%20Interior%20Bazzar%20available%20across%20India%3F`
        }
    ];


    const handleQuestionClick = (index: number) => {
        setSelectedQuestion(index);
        window.open(questions[index].whatsappLink, '_blank');
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };
    if (!isVisible) return <ChatBot onClick={() => setIsVisible(!isVisible)} />;
    return (
        <>
            <ChatBot onClick={() => setIsVisible(!isVisible)} />
            <div className={styles.chatContainer}>
                <div className={styles.chatHeader}>
                    <h3>How can we help you?</h3>
                    <button onClick={handleDismiss} className={styles.closeButton}>×</button>
                </div>
                <div className={styles.questionsContainer}>
                    {questions.map((question, index) => (
                        <button
                            key={index}
                            className={`${styles.questionButton} ${selectedQuestion === index ? styles.selected : ''}`}
                            onClick={() => handleQuestionClick(index)}
                        >
                            {question.text}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Messages;