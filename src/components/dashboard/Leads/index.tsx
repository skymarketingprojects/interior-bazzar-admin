import styles from "./Leads.module.css"
import { LeadTable } from "../components"
const LeadDashboard = () => {
    return (
        <>
            <h2 className={`${styles.title}`}>Lead Details</h2>
            <LeadTable />
        </>
    )
}
export default LeadDashboard;