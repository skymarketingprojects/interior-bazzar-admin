import styles from "./AuthCard.module.css";
interface FormContainerProps {
    title?: string;
    children: React.ReactNode;
}


const AuthCard: React.FC<FormContainerProps> = ({ title: _title, children }) => {

    return (
        <div className={styles.card}>
            {/* <h2 className={styles.title}>{title}</h2> */}
            {children}
        </div>
    )
}

export default AuthCard;