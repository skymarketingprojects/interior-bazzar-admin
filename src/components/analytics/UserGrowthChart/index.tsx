import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import useUserGrowthChart from './useUserGrowthChart';
import styles from "./UserGrowthChart.module.css"
export const UserGrowthChart = () => {

    const {
        loading,
        userGrowthData: data,
        page,
        filter,
        setPage,
        setFilter,
        totalPages,
        handleFilterChange,
    } = useUserGrowthChart();
    if (loading) {
        return (
            <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
                <h3>Loading...</h3>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>User Growth Over Time</h3>

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

            {/* 🔹 Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#4CAF50" strokeWidth={2} />
                </LineChart>
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
    )
}
