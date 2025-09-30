// LeadDetail.tsx

import type { FunnelLeadType } from "../../../../types/content";
import styles from "./FunnelDetail.module.css";

const FunnelDetail = ({ lead }: { lead: FunnelLeadType }) => {


    // const renderMultiline = (text: string) => {
    //     const lines = text.split(/\r?\n/);
    //     return (
    //         <td className={styles.multiline}>
    //             {lines.map((line, i) => (
    //                 <span key={i}>
    //                     {line}
    //                     {i < lines.length - 1 && <br />}
    //                 </span>
    //             ))}
    //         </td>
    //     );
    // };

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>Lead Information</h3>
            <table className={styles.table}>
                <tbody>
                    <tr><th>ID</th><td>{lead.id}</td></tr>
                    <tr><th>Name</th><td>{lead.name}</td></tr>
                    <tr><th>Company Name</th><td>{lead.companyName}</td></tr>
                    <tr><th>Email</th><td>{lead.email}</td></tr>
                    <tr><th>Phone</th><td>{lead.phone}</td></tr>
                    <tr><th>Plan Type </th><td>{lead.planType}</td></tr>

                    <tr>
                        <th>Plan</th>
                        <td>{lead.plan}</td>
                        {/* {renderMultiline(plan)} */}
                    </tr>

                    <tr>
                        <th>Intrested</th>
                        <td>{lead.intrest}</td>
                        {/* {renderMultiline()} */}
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default FunnelDetail;
