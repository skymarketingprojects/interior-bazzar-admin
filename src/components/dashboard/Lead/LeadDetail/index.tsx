// LeadDetail.tsx

import type { AdminLeadType } from "../../../../types/content";
import styles from "./LeadDetail.module.css";

const LeadDetail = ({ lead }: { lead: AdminLeadType }) => {
    const queryText = String(lead.query ?? "");
    const intrestedIn = String(lead.interested ?? "");

    const renderMultiline = (text: string) => {
        const lines = text.split(/\r?\n/);
        return (
            <td className={styles.multiline}>
                {lines.map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < lines.length - 1 && <br />}
                    </span>
                ))}
            </td>
        );
    };

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>Lead Information</h3>
            <table className={styles.table}>
                <tbody>
                    <tr><th>ID</th><td>{lead.id}</td></tr>
                    <tr><th>Date</th><td>{lead.date}</td></tr>
                    <tr><th>Name</th><td>{lead.name}</td></tr>
                    <tr><th>Email</th><td>{lead.email}</td></tr>
                    <tr><th>Phone</th><td>{lead.phone}</td></tr>
                    <tr><th>Interested In</th><td>{lead.interested}</td></tr>

                    <tr>
                        <th>Query</th>
                        {renderMultiline(queryText)}
                    </tr>

                    <tr>
                        <th>Intrested</th>
                        {renderMultiline(intrestedIn)}
                    </tr>

                    <tr><th>Country</th><td>{lead.country}</td></tr>
                    <tr><th>City</th><td>{lead.city}</td></tr>
                    <tr><th>Assigned To</th><td>{lead.assigned}</td></tr>
                </tbody>
            </table>
        </div>
    );
};

export default LeadDetail;
