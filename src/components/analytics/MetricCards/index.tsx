const MetricCard = ({ title, value, color }) => (
    <div style={{
        padding: '1rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        minWidth: '150px',
        borderLeft: `4px solid ${color}`
    }}>
        <h4 style={{ margin: 0, fontSize: '14px', color: '#666' }}>{title}</h4>
        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '4px 0 0' }}>{value}</p>
    </div>
);

export const MetricCards = ({ data }) => (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <MetricCard title="Total Users" value={data.total} color="#4CAF50" />
        <MetricCard title="Active Users" value={data.active} color="#2196F3" />
        <MetricCard title="New Users Today" value={data.newToday} color="#FFC107" />
        <MetricCard title="Churned Users" value={data.churned} color="#F44336" />
    </div>
);
