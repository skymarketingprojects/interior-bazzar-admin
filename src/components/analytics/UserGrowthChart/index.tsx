import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const UserGrowthChart = ({ data }) => (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>User Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#4CAF50" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);
