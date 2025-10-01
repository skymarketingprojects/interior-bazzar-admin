import { useState, useMemo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import styles from "./UserSignupsBarChart.module.css";

// Define the shape of each data entry
export interface SignupData {
    date: string; // ISO "YYYY-MM-DD"
    signups: number;
    paid: number;
    active: number;
}

interface Props {
    data: SignupData[];
}

type FilterType = "daily" | "weekly" | "monthly";

export const UserSignupsBarChart: React.FC<Props> = ({ data }) => {
    const [filter, setFilter] = useState<FilterType>("daily");

    // 🔹 Transform data based on filter
    const filteredData = useMemo(() => {
        if (filter === "daily") {
            return data;
        }

        if (filter === "weekly") {
            const grouped: SignupData[] = [];
            for (let i = 0; i < data.length; i += 7) {
                const slice = data.slice(i, i + 7);
                grouped.push({
                    date: `${slice[0].date} - ${slice[slice.length - 1].date}`,
                    signups: slice.reduce((a, c) => a + c.signups, 0),
                    paid: slice.reduce((a, c) => a + c.paid, 0),
                    active: slice.reduce((a, c) => a + c.active, 0),
                });
            }
            return grouped;
        }

        if (filter === "monthly") {
            const map = new Map<string, SignupData>();
            data.forEach((d) => {
                const month = d.date.slice(0, 7); // "YYYY-MM"
                if (!map.has(month)) {
                    map.set(month, { date: month, signups: 0, paid: 0, active: 0 });
                }
                const item = map.get(month)!;
                item.signups += d.signups;
                item.paid += d.paid;
                item.active += d.active;
            });
            return Array.from(map.values());
        }

        return data;
    }, [filter, data]);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>User Signups</h3>

            {/* 🔹 Filter buttons */}
            <div className={styles.filters}>
                <button
                    className={`${styles.button} ${filter === "daily" ? styles.active : ""}`}
                    onClick={() => setFilter("daily")}
                >
                    Daily
                </button>
                <button
                    className={`${styles.button} ${filter === "weekly" ? styles.active : ""}`}
                    onClick={() => setFilter("weekly")}
                >
                    Weekly
                </button>
                <button
                    className={`${styles.button} ${filter === "monthly" ? styles.active : ""}`}
                    onClick={() => setFilter("monthly")}
                >
                    Monthly
                </button>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="signups" fill="#2196F3" />
                    <Bar dataKey="paid" fill="#0dff00ff" />
                    <Bar dataKey="active" fill="#801616ff" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
