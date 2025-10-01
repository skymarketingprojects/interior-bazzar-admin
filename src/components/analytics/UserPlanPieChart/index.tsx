import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#8884d8', '#FFBB28', '#82ca9d', '#FF8042', '#8884d8'];
const COLOR2 = ['#02011bff', '#130babff', '#8884d8', '#FFBB28', '#82ca9d', '#FF8042',];

export const UserPlanPieChart = ({ data }) => {
    // compute total
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Total queries</h3>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
                Total: {total}
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        label
                    >
                        {data.map((entry, index) => (
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
