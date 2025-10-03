import useQueriesPieChart from './useQueriesPieChart';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Define proper types for the data.
interface UserPlanData {
    name: string;
    value: number;
}

const COLORS = ['#8884d8', '#FFBB28', '#82ca9d', '#FF8042', '#8884d8'];

export const QueriesPieChart = () => {

    const { loading, totalLeads, leadsData } = useQueriesPieChart();

    if (loading) {
        return (
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <h3>Loading...</h3>
            </div>
        );
    }
    if (!leadsData || leadsData.length === 0) {
        return <div>No data available</div>;
    }


    return (
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Total queries</h3>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
                Total: {totalLeads}
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        nameKey="name"
                        dataKey="value"
                        data={leadsData}
                        outerRadius={100}
                        label
                    >
                        {leadsData.map((_entry: UserPlanData, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
