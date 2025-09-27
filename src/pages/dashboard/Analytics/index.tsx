import useAnalytics from './useAnalytics';
import styles from './Analytics.module.css';
import { UsersIcon } from '../../../components/ui/Icons/SVG';

const Analytics = () => {
    const { noOfUsers } = useAnalytics();
    return (
        <section className={styles.leadDashboardContainer}>
            <div className={`${styles.sectionHeader}`}>
                <UsersIcon className={`${styles.icon}`} />
                <p className={`${styles.sectionPara}`}>Total no of users: <span>{noOfUsers}</span></p>
            </div>

        </section>

    )
}
export default Analytics;