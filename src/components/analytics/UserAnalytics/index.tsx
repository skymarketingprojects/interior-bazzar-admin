import { MetricCards } from '../MetricCards';
import { UserGrowthChart } from '../UserGrowthChart';
import { UserSignupsBarChart } from '../UserSignupsBarChart';
import { UserPlanPieChart } from '../UserPlanPieChart';

export const userMetrics = {
    total: 4220,
    active: 1341,
    newToday: 21,
    churned: 4
};

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
    { date: '2025-09-25', signups: 20 },
    { date: '2025-09-26', signups: 35 },
    { date: '2025-09-27', signups: 40 },
    { date: '2025-09-28', signups: 22 },
    { date: '2025-09-29', signups: 50 },
    { date: '2025-09-30', signups: 80 },
    { date: '2025-10-01', signups: 21 },
];

export const userPlanData = [
    { name: 'Free', value: 2800 },
    { name: 'Trial', value: 900 },
    { name: 'Paid', value: 520 },
];

export const UserAnalytics = () => {
    return (<>
        <MetricCards data={userMetrics} />
        <div style={{ padding: '2rem', display: 'flex', }}>
            <UserGrowthChart data={userGrowthData} />
            <UserSignupsBarChart data={userSignups} />
            <UserPlanPieChart data={userPlanData} />
        </div>
    </>
    );
};
