import React from "react";
import useLeadTable from "./useLeadTable";
import AssignLead from "../../AssignLead";
import styles from "./LeadTable.module.css";
import { useModal } from "../../../../context/ModalContext";
import type { AdminLeadType, LeadFilterType } from "../../../../types/content";
import LeadDetail from "../LeadDetail";
const LeadTable = React.memo(({ filter }: { filter: LeadFilterType }) => {

    const {
        leads,
        pageNo,
        loading,
        hasNext,
        pageSize,
        setPageNo,
        totalPages,
        incrementPage,
        onLeadAssigned,
    } = useLeadTable(filter);
    const { showModal } = useModal();
    const handleAssignClick = (lead: AdminLeadType) => {
        showModal(<AssignLead lead={lead} onAssigned={onLeadAssigned} />)
    };
    const handleViewClick = (lead: AdminLeadType) => {
        showModal(<LeadDetail lead={lead} />)
    }
    const renderValue = (value: string | null | undefined) => {
        if (!value) return "--";
        return value;
    };

    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mail</th>
                        <th>Interested</th>
                        <th>Query</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Assigned</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ?
                        Array.from({ length: pageSize }).map((_, i) => <tr key={i}>
                            <td colSpan={10}>
                                loading....
                            </td>
                        </tr>) : leads.map((lead) => (
                            <tr key={lead.id}>
                                <td>{renderValue(lead.date)}</td>
                                <td>{renderValue(lead.name)}</td>
                                <td>{renderValue(lead.phone)}</td>
                                <td>{renderValue(lead.email)}</td>
                                <td>
                                    {renderValue(lead.interested)}
                                </td>
                                <td>{renderValue(lead.query)}</td>
                                <td>
                                    {renderValue(lead.country)}
                                </td>
                                <td>
                                    {renderValue(lead.city)}
                                </td>
                                <td>
                                    <button
                                        className={`${styles.assignButton} ${lead.assigned ? styles.assigned : ""}`}
                                        onClick={() => handleAssignClick(lead)}
                                    >
                                        {lead.assigned ? "Assigned" : "Assign"}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={styles.assignButton}
                                        onClick={() => handleViewClick(lead)}
                                    >
                                        View
                                    </button>
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
});

export default LeadTable;
