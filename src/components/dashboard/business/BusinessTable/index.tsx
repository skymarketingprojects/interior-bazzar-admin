import type { BusinessFilterType } from "../../../../types/content";
import styles from "./BusinessTable.module.css";
import useBusinessTable from "./useBusinessTable";


const BusinessTable = ({ filter }: { filter: BusinessFilterType }) => {
    const {
        pageNo,
        loading,
        hasNext,
        pageSize,
        setPageNo,
        businesses,
        totalPages,
        incrementPage,
    } = useBusinessTable(filter);


    const renderValue = (value: string | null | undefined | number) => {
        if (!value && value !== 0) return "--";
        return value;
    };

    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Join At</th>
                        <th>Name</th>
                        <th>Plan</th>
                        <th>Assigned Leads</th>
                        <th>Platform Leads</th>
                        <th>Total Leads</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? Array.from({ length: pageSize }).map((_, i) => <tr key={i}>
                        <td colSpan={10}>
                            loading....
                        </td>
                    </tr>) : businesses.map((business) => (
                        <tr key={business.id}>
                            <td>{renderValue(business.id)}</td>
                            <td>{renderValue(business.joinAt)}</td>
                            <td>{renderValue(business.name)}</td>
                            <td>
                            {business.plan?.length
                                ? business.plan.map(p => p.name).join(", ")
                                : "--"}
                            </td>

                            <td>
                                {renderValue(business.assignedLeads)}
                            </td>
                            <td>{renderValue(business.platformLeads)}</td>
                            <td>
                                {renderValue(business.totalLeads)}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className={styles.pagination}>
                <button
                    disabled={pageNo === 1}
                    onClick={() => setPageNo((prev) => prev - 1)}
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                        <button
                            key={page}
                            className={pageNo === page ? styles.activePage : ""}
                            onClick={() => setPageNo(page)}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    disabled={!hasNext}
                    onClick={incrementPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BusinessTable;
