import useAnalytics from './useAnalytics';
import styles from './Analytics.module.css';
import { UsersIcon } from '../../../components/ui/Icons/SVG';
import AnalyticsStat from '../../../components/analytics/AnalyticsStat';
const Analytics = () => {
    const { noOfUsers } = useAnalytics();
    return (
        <section className={styles.leadDashboardContainer}>
            <div className={`${styles.sectionHeader}`}>
                <UsersIcon className={`${styles.icon}`} />
                <p className={`${styles.sectionPara}`}>Total users : <span>{noOfUsers}</span></p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Single number */}
                <AnalyticsStat
                    icon={UsersIcon}
                    title="Total Clients"
                    primaryValue="5,000"
                />

                {/* Two numbers (business active/inactive) */}
                <AnalyticsStat
                    icon={UsersIcon}
                    title="Total Business"
                    primaryValue="20"
                    secondaryValues={[
                        { label: "Active", value: 20, color: "green" },
                        { label: "Active", value: 20, color: "green" },
                    ]}
                />

                {/* Single number again */}
                <AnalyticsStat
                    icon={UsersIcon}
                    title="Total Users"
                    primaryValue="5,000"
                />

                {/* Two numbers (upgrades/inactive today) */}
                <AnalyticsStat
                    icon={UsersIcon}
                    title="Today"
                    primaryValue="70"
                    secondaryValues={[
                        { label: "Upgrade", value: 70, color: "blue" },
                        { label: "Inactive", value: 50, color: "red" },
                    ]}
                />
            </div>
        </section>

    )
}
export default Analytics;