import useAnalytics from './useAnalytics';
import styles from './Analytics.module.css';

const Analytics = () => {
    const { noOfUsers } = useAnalytics();
    return (
        <>
            <p className={`${styles.sectionPara}`}>Total no of users: <span>{noOfUsers}</span></p>
            <div className={`${styles.filteresContainer}`}>
            </div>
        </>

    )
}
export default Analytics;