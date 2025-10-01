import type { MetricCardType } from "../../../types/content";

interface MetricCard {
    title: string;
    value: number;
    color: string;
}

const MetricCard = ({ title, value, color }: MetricCard) => (
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

export const MetricCards = ({ data }: { data: MetricCardType[] }) => (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>

        {data.map((metric, index) =>
            <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                color={metric.colorHex || '#007BFF'}
            />)
        }


    </div>
);
