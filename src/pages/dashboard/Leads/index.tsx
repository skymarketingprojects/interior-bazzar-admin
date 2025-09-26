import styles from "./Leads.module.css"
import LeadTable from "../../../components/dashboard/Lead/LeadTable"
import useLeads from "./useLeads";
import { Button, Input, SelectPrimitive } from "../../../components/ui";
const LeadDashboard = () => {
    const { noOfUsers, searchText, handleChange } = useLeads();
    return (
        <>
            <p className={`${styles.sectionPara}`}>Total no of users: <span>{noOfUsers}</span></p>
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
            <LeadTable />
        </>
    )
}
export default LeadDashboard;