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





export const UserAnalytics = () => {
    return (<>

        <div >
            <UserGrowthChart />
            <UserSignupsBarChart />
            <QueriesPieChart />
        </div>
    </>
    );
};
