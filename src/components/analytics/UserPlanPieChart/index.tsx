import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#8884d8', '#FFBB28', '#82ca9d'];

export const UserPlanPieChart = ({ data }) => (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
        <h3>User Distribution by Plan</h3>
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
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    </div>
);
