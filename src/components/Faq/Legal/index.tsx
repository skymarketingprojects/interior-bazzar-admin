import useLegal from "./useLegal";
import parser from "html-react-parser"
import styles from "./Legal.module.css"
const Legal = () => {
    const { legal, loading } = useLegal();
    return (<div className={`${styles.legalContainer}`}>
        {loading ? <div>loading....</div> : parser(legal)}
    </ div>)
}

export default Legal;