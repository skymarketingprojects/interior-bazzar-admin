import useAnalytics from './useAnalytics';
import styles from './Analytics.module.css';
import { UsersIcon } from '../../../components/ui/Icons/SVG';
import { FaUsers, FaBuilding, FaArrowUp } from "react-icons/fa";
import AnalyticsStat from '../../../components/analytics/AnalyticsStat';
const Analytics = () => {
    const { noOfUsers } = useAnalytics();
    return (
        <section className={styles.leadDashboardContainer}>
            <div className={`${styles.sectionHeader}`}>
                <UsersIcon className={`${styles.icon}`} />
                <p className={`${styles.sectionPara}`}>Total no of paid users: <span>{noOfUsers}</span></p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Single number */}
                <AnalyticsStat
                    icon={<FaUsers />}
                    title="Total Clients"
                    primaryValue="5,000"
                />

                {/* Two numbers (business active/inactive) */}
                <AnalyticsStat
                    icon={<FaBuilding />}
                    title="Total Business"
                    primaryValue="20"
                    secondaryValues={[
                        { label: "Active", value: 20, color: "green" },
                        { label: "Active", value: 20, color: "green" },
                    ]}
                />

                {/* Single number again */}
                <AnalyticsStat
                    icon={<FaUsers />}
                    title="Total Users"
                    primaryValue="5,000"
                />

                {/* Two numbers (upgrades/inactive today) */}
                <AnalyticsStat
                    icon={<FaArrowUp />}
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