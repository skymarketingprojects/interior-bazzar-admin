import useLeadTable from "./useLeadTable";
import styles from "./LeadTable.module.css";
import { Button } from "../../../../ui";
import LeadForm from "../LeadForm";
import { useModal } from "../../../../../context/ModalContext";
import type { AdminLeadType } from "../../../../../types/content";
import { getLabelByValue } from "../helper";
import { STATUS, TAGS, PRIORITIES } from "../../../../../utils/constants/app";
import { logger } from "../../../../../utils/logger";
const LeadTable = () => {
    const { leads, loading, updateLead } = useLeadTable();
    const { showModal } = useModal();
    const handleEditClick = (lead: AdminLeadType) => {
        showModal(<LeadForm lead={lead} onSubmit={updateLead} />)
    };
    // if (loading) return <p>Loading...</p>
    // if (!leads.length) {

    //     return (
    //         <div className={styles.wrapper}>
    //             <p>No leads found</p>
    //         </div>
    //     )
    // }
    logger.log("this is leads: ", leads);
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mail</th>
                        <th>Request</th>
                        <th>Detail</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Assigned</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.date}</td>
                            <td>{lead.name}</td>
                            <td>{lead.phone}</td>
                            <td>{lead.email}</td>
                            <td>
                                {lead.request}
                            </td>
                            <td>{lead.detail}</td>
                            <td>

                                {lead.country}

                            </td>
                            <td>

                                {lead.city}

                            </td>
                            <td>

                                {lead.assigned}

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
