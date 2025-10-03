import styles from "./UserAnalytics.module.css"
import { MetricCards } from '../MetricCards';
import { UserGrowthChart } from '../UserGrowthChart';
import { UserSignupsBarChart } from '../UserSignupsBarChart';
import { QueriesPieChart } from '../QueriesPieChart';
import type { MetricCardType } from "../../../types/content";

export const userMetrics: MetricCardType[] = [
    { title: "Total Users", value: 1000, colorHex: "#667BFF" },
    { title: "Active Users", value: 800, colorHex: "#117BFF" },
    { title: "New Users Today", value: 50, colorHex: "#8BFF" },
    { title: "Churned Users", value: 20, colorHex: "#0099ff" },
];

export const userGrowthData = [
    { date: '2025-09-25', users: 3900 },
    { date: '2025-09-26', users: 3950 },
    { date: '2025-09-27', users: 4000 },
    { date: '2025-09-28', users: 4050 },
    { date: '2025-09-29', users: 4100 },
    { date: '2025-09-30', users: 4180 },
    { date: '2025-10-01', users: 4220 },
];



export const UserAnalytics = () => {
    return (<>
        {/* <MetricCards data={userMetrics} /> */}
        <div >
            <UserGrowthChart data={userGrowthData} />
            <UserSignupsBarChart />
            <QueriesPieChart />
        </div>
    </>
    );
};
