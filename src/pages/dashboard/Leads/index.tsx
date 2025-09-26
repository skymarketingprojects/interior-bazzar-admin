import styles from "./Leads.module.css"
// import LeadTable from "../../../components/dashboard/Lead/LeadTable"
import useLeads from "./useLeads";
import { Button, Input, SelectPrimitive } from "../../../components/ui";
import { UsersIcon } from "../../../components/ui/Icons/SVG";
const LeadDashboard = () => {
    const { noOfUsers, searchText, handleChange } = useLeads();
    return (
        <section className={styles.leadDashboardContainer}>
            <div className={`${styles.sectionHeader}`}>
                <UsersIcon className={`${styles.icon}`} />
                <p className={`${styles.sectionPara}`}>Total no of users: <span>{noOfUsers}</span></p>
            </div>
            <div className={`${styles.filteresContainer}`}>
                <SelectPrimitive
                    // placeholder="Sort by"
                    id="sortby"
                    name="sortby"
                    options={["All", "Active"]}
                    onChange={handleChange}
                />
                <Input name="searchText" id="searchText" placeholder="Search" value={searchText} onChange={handleChange} />
                <Button radius={true} variant="gradient">Search</Button>
            </div>
            <div>
                {/* <LeadTable /> */}
            </div>
        </section>
    )
}
export default LeadDashboard;