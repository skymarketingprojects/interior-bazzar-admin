import styles from "./FaqQna.module.css"
const FaqQna = ({ qna = {
    id: 1,
    index: 1,
    question: "What is InteriorBazzar ?",
    answer: " InteriorBazzar is an aggregator platform that attracts potential customers via digital campaigns and shares qualified project leads with registered interior businesses and brands.We do not execute interior projects ourselves."
} }: { qna: any }) => {

    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.qnaSection} ${styles.question}`}>
                Q{qna.index}:
            </span>
            <div className={`${styles.qnaSection} ${styles.answerSection}`}>
                <h3 className={`${styles.question}`}>{qna.question}</h3>
                <p className={`${styles.answer}`}>
                    {qna.answer}
                </p>
            </div>
        </div>
    )
}
export default FaqQna;