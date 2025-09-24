import useLeadTable from "./useLeadTable";
import styles from "./LeadTable.module.css";
import { Button } from "../../../../ui";
import LeadForm from "../LeadForm";
import { useModal } from "../../../../../context/ModalContext";
import type { AdminLeadType } from "../../../../../types/content";
import { getLabelByValue } from "../helper";
import { STATUS, TAGS, PRIORITIES } from "../../../../../utils/constants/app";
const LeadTable = () => {
    const { leads, loading, updateLead } = useLeadTable();
    const { showModal } = useModal();
    const handleEditClick = (lead: AdminLeadType) => {
        showModal(<LeadForm lead={lead} onSubmit={updateLead} />)
    };
    if (loading) return <p>Loading...</p>
    if (!leads.length) {

        return (
            <div className={styles.wrapper}>
                <p>No leads found</p>
            </div>
        )

    }
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Interested In</th>
                        <th>Contact No</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Query</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Remark</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.interested}</td>
                            <td>{lead.phone}</td>
                            <td>{lead.email}</td>
                            <td>
                                {lead.city}, {lead.state}, {lead.country}
                            </td>
                            <td>{lead.query}</td>
                            <td>
                                <span className={`${styles.badge} ${styles[lead.tag]}`}>
                                    {getLabelByValue(TAGS, lead.tag)}
                                </span>
                            </td>
                            <td>
                                <span className={`${styles.badge} ${styles[lead.status]}`}>
                                    {getLabelByValue(STATUS, lead.status)}
                                </span>
                            </td>
                            <td>
                                <span className={`${styles.badge} ${styles[lead.priority]}`}>
                                    {getLabelByValue(PRIORITIES, lead.priority)}
                                </span>
                            </td>
                            <td>{lead.remark || "—"}</td>
                            <td><Button radius={true} onClick={() => handleEditClick(lead)}>Edit</Button></td>
                        </tr>
                    ))}
                    {leads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.interested}</td>
                            <td>{lead.phone}</td>
                            <td>{lead.email}</td>
                            <td>
                                {lead.city}, {lead.state}, {lead.country}
                            </td>
                            <td>{lead.query}</td>
                            <td>
                                <span className={`${styles.badge} ${styles[lead.tag]}`}>
                                    {getLabelByValue(TAGS, lead.tag)}
                                </span>
                            </td>
                            <td>
                                <span className={`${styles.badge} ${styles[lead.status]}`}>
                                    {getLabelByValue(STATUS, lead.status)}
                                </span>
                            </td>
                            <td>
                                <span className={`${styles.badge} ${styles[lead.priority]}`}>
                                    {getLabelByValue(PRIORITIES, lead.priority)}
                                </span>
                            </td>
                            <td>{lead.remark || "—"}</td>
                            <td><Button onClick={() => handleEditClick(lead)}>Edit</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeadTable;
