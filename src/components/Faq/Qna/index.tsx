import FaqQna from "../FaqQna";
import useQna from "./useQna";
import styles from "./Qna.module.css"
const Qna = () => {
    const { qna, loading, } = useQna();
    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if (!qna.length) {
        return (
            <div>
                <h1>No Qna found</h1>
            </div>
        )
    }
    return (
        <div className={`${styles.qnaContainer}`}>
            {qna.map((qna) => <FaqQna key={qna.id} qna={qna} />)}
        </div>
    )
}
export default Qna;