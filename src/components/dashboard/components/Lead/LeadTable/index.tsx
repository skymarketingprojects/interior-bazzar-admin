import useLeadTable from "./useLeadTable";
import styles from "./LeadTable.module.css";
import { useModal } from "../../../../../context/ModalContext";
import type { AdminLeadType } from "../../../../../types/content";
import AssignLead from "../../AssignLead";
const LeadTable = () => {
    const { loading, leads, incrementPage } = useLeadTable();
    const { showModal } = useModal();
    const handleAssignClick = (lead: AdminLeadType) => {
        showModal(<AssignLead lead={lead} />)
    };
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
                    {loading ? "loading" : leads.map((lead) => (
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

                                <button onClick={() => handleAssignClick(lead)}>Assign Lead</button>

                            </td>
                            <td><button onClick={() => { }}>View</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default LeadTable;
