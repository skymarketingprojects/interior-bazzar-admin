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
import { useSignupBarChart } from "./useSignupBarChart";

export const UserSignupsBarChart = () => {

    const {

        page,
        filter,
        loading,
        setPage,
        totalPages,
        paginatedData,
        handleFilterChange,
    } = useSignupBarChart();

    if (loading) {
        return (
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <h3>Loading...</h3>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>User Signups</h3>

            {/* 🔹 Filter buttons */}
            <div className={styles.filters}>
                <button
                    className={`${styles.button} ${filter === "daily" ? styles.active : ""}`}
                    onClick={() => handleFilterChange("daily")}
                >
                    Daily
                </button>
                <button
                    className={`${styles.button} ${filter === "weekly" ? styles.active : ""}`}
                    onClick={() => handleFilterChange("weekly")}
                >
                    Weekly
                </button>
                <button
                    className={`${styles.button} ${filter === "monthly" ? styles.active : ""}`}
                    onClick={() => handleFilterChange("monthly")}
                >
                    Monthly
                </button>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={paginatedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="clients" fill="#2196F3" />
                    <Bar dataKey="businesses" fill="#0dff00ff" />
                    <Bar dataKey="users" fill="#801616ff" />
                </BarChart>
            </ResponsiveContainer>

            {/* 🔹 Pagination controls */}
            <div className={styles.pagination}>
                <button
                    className={styles.pageBtn}
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>
                <span className={styles.pageInfo}>
                    Page {page} of {totalPages}
                </span>
                <button
                    className={styles.pageBtn}
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
