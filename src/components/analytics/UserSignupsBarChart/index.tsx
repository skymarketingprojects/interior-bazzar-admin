import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export const UserSignupsBarChart = ({ data }) => (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>User Signups Per Day</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="signups" fill="#2196F3" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);
