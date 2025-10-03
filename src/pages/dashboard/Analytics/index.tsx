import useAnalytics from './useAnalytics';
import styles from './Analytics.module.css';
import { UsersIcon } from '../../../components/ui/Icons/SVG';
import AnalyticsStat from '../../../components/analytics/AnalyticsStat';
import { UserAnalytics } from '../../../components/analytics/UserAnalytics';
const Analytics = () => {
    const { loading, noOfUsers, analytics } = useAnalytics();
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <section className={styles.leadDashboardContainer}>
            <div className={`${styles.sectionHeader}`}>
                <UsersIcon className={`${styles.icon}`} />
                <p className={`${styles.sectionPara}`}>Total users : <span>{noOfUsers}</span></p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>

                {analytics.map((item) =>
                    <AnalyticsStat
                        icon={item.icon}
                        title={item.name}
                        primaryValue={item.value}
                    />)}

            </div>
            <div >
                <UserAnalytics />
            </div>

        </section>

    )
}
export default Analytics;