import styles from "./UserAnalytics.module.css"
import { MetricCards } from '../MetricCards';
import { UserGrowthChart } from '../UserGrowthChart';
import { UserSignupsBarChart } from '../UserSignupsBarChart';
import { UserPlanPieChart } from '../UserPlanPieChart';
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

export const userSignups = [
    { date: '2025-07-01', signups: 50, paid: 12, active: 8 },
    { date: '2025-07-02', signups: 42, paid: 13, active: 11 },
    { date: '2025-07-03', signups: 13, paid: 9, active: 7 },
    { date: '2025-07-04', signups: 25, paid: 8, active: 8 },
    { date: '2025-07-05', signups: 11, paid: 5, active: 4 },
    { date: '2025-07-06', signups: 67, paid: 16, active: 9 },
    { date: '2025-07-07', signups: 64, paid: 20, active: 12 },
    { date: '2025-07-08', signups: 43, paid: 12, active: 14 },
    { date: '2025-07-09', signups: 28, paid: 9, active: 7 },
    { date: '2025-07-10', signups: 36, paid: 14, active: 10 },
    { date: '2025-07-11', signups: 75, paid: 19, active: 15 },
    { date: '2025-07-12', signups: 30, paid: 7, active: 8 },
    { date: '2025-07-13', signups: 79, paid: 15, active: 11 },
    { date: '2025-07-14', signups: 71, paid: 18, active: 10 },
    { date: '2025-07-15', signups: 49, paid: 16, active: 12 },
    { date: '2025-07-16', signups: 53, paid: 18, active: 13 },
    { date: '2025-07-17', signups: 34, paid: 13, active: 12 },
    { date: '2025-07-18', signups: 48, paid: 15, active: 11 },
    { date: '2025-07-19', signups: 20, paid: 9, active: 7 },
    { date: '2025-07-20', signups: 59, paid: 17, active: 10 },
    { date: '2025-07-21', signups: 38, paid: 12, active: 9 },
    { date: '2025-07-22', signups: 63, paid: 20, active: 15 },
    { date: '2025-07-23', signups: 22, paid: 6, active: 5 },
    { date: '2025-07-24', signups: 60, paid: 14, active: 10 },
    { date: '2025-07-25', signups: 55, paid: 16, active: 9 },
    { date: '2025-07-26', signups: 41, paid: 15, active: 12 },
    { date: '2025-07-27', signups: 39, paid: 12, active: 11 },
    { date: '2025-07-28', signups: 66, paid: 18, active: 13 },
    { date: '2025-07-29', signups: 77, paid: 19, active: 14 },
    { date: '2025-07-30', signups: 45, paid: 12, active: 9 },
    { date: '2025-07-31', signups: 32, paid: 10, active: 8 },
    { date: '2025-08-01', signups: 52, paid: 14, active: 10 },
    { date: '2025-08-02', signups: 47, paid: 12, active: 9 },
    { date: '2025-08-03', signups: 35, paid: 10, active: 8 },
    { date: '2025-08-04', signups: 60, paid: 17, active: 13 },
    { date: '2025-08-05', signups: 44, paid: 11, active: 10 },
    { date: '2025-08-06', signups: 39, paid: 9, active: 7 },
    { date: '2025-08-07', signups: 68, paid: 21, active: 15 },
    { date: '2025-08-08', signups: 55, paid: 16, active: 13 },
    { date: '2025-08-09', signups: 33, paid: 8, active: 6 },
    { date: '2025-08-10', signups: 29, paid: 7, active: 5 },
    { date: '2025-08-11', signups: 72, paid: 19, active: 14 },
    { date: '2025-08-12', signups: 48, paid: 13, active: 10 },
    { date: '2025-08-13', signups: 62, paid: 18, active: 12 },
    { date: '2025-08-14', signups: 50, paid: 14, active: 11 },
    { date: '2025-08-15', signups: 46, paid: 13, active: 9 },
    { date: '2025-08-16', signups: 31, paid: 9, active: 6 },
    { date: '2025-08-17', signups: 40, paid: 11, active: 8 },
    { date: '2025-08-18', signups: 57, paid: 15, active: 12 },
    { date: '2025-08-19', signups: 36, paid: 10, active: 7 },
    { date: '2025-08-20', signups: 70, paid: 20, active: 15 },
    { date: '2025-08-21', signups: 64, paid: 18, active: 14 },
    { date: '2025-08-22', signups: 41, paid: 12, active: 9 },
    { date: '2025-08-23', signups: 30, paid: 8, active: 6 },
    { date: '2025-08-24', signups: 58, paid: 16, active: 11 },
    { date: '2025-08-25', signups: 66, paid: 19, active: 13 },
    { date: '2025-08-26', signups: 49, paid: 15, active: 10 },
    { date: '2025-08-27', signups: 37, paid: 10, active: 7 },
    { date: '2025-08-28', signups: 63, paid: 17, active: 14 },
    { date: '2025-08-29', signups: 74, paid: 20, active: 16 },
    { date: '2025-08-30', signups: 43, paid: 12, active: 9 },
    { date: '2025-08-31', signups: 34, paid: 10, active: 7 },
    { date: '2025-09-01', signups: 58, paid: 16, active: 12 },
    { date: '2025-09-02', signups: 42, paid: 11, active: 9 },
    { date: '2025-09-03', signups: 33, paid: 9, active: 7 },
    { date: '2025-09-04', signups: 60, paid: 18, active: 13 },
    { date: '2025-09-05', signups: 49, paid: 14, active: 10 },
    { date: '2025-09-06', signups: 36, paid: 10, active: 8 },
    { date: '2025-09-07', signups: 65, paid: 19, active: 15 },
    { date: '2025-09-08', signups: 53, paid: 15, active: 11 },
    { date: '2025-09-09', signups: 38, paid: 12, active: 9 },
    { date: '2025-09-10', signups: 45, paid: 13, active: 10 },
    { date: '2025-09-11', signups: 69, paid: 20, active: 16 },
    { date: '2025-09-12', signups: 32, paid: 9, active: 7 },
    { date: '2025-09-13', signups: 76, paid: 22, active: 18 },
    { date: '2025-09-14', signups: 48, paid: 14, active: 11 },
    { date: '2025-09-15', signups: 55, paid: 17, active: 12 },
    { date: '2025-09-16', signups: 39, paid: 11, active: 8 },
    { date: '2025-09-17', signups: 44, paid: 12, active: 10 },
    { date: '2025-09-18', signups: 59, paid: 16, active: 13 },
    { date: '2025-09-19', signups: 31, paid: 8, active: 6 },
    { date: '2025-09-20', signups: 67, paid: 20, active: 15 },
    { date: '2025-09-21', signups: 52, paid: 15, active: 11 },
    { date: '2025-09-22', signups: 43, paid: 13, active: 10 },
    { date: '2025-09-23', signups: 35, paid: 10, active: 8 },
    { date: '2025-09-24', signups: 61, paid: 17, active: 13 },
    { date: '2025-09-25', signups: 73, paid: 21, active: 17 },
    { date: '2025-09-26', signups: 40, paid: 11, active: 9 },
    { date: '2025-09-27', signups: 50, paid: 14, active: 11 },
    { date: '2025-09-28', signups: 62, paid: 18, active: 14 },
    { date: '2025-09-29', signups: 46, paid: 13, active: 10 },
    { date: '2025-09-30', signups: 37, paid: 11, active: 8 },
    { date: '2025-10-01', signups: 37, paid: 11, active: 8 },
];

export const userPlanData = [
    { name: 'Free', value: 2800 },
    { name: 'Trial', value: 900 },
    { name: 'Paid', value: 520 },
];

export const UserAnalytics = () => {
    return (<>
        <MetricCards data={userMetrics} />
        <div >
            {/* <UserGrowthChart data={userGrowthData} /> */}
            <UserSignupsBarChart data={userSignups} />
            {/* <UserPlanPieChart data={userPlanData} /> */}
        </div>
    </>
    );
};
