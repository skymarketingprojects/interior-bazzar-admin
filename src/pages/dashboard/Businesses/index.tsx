import styles from "./Businesses.module.css"
import useBusinesses from "./useBusinesses";
import { Button, Input, SelectPrimitive } from "../../../components/ui";
import BusinessTable from "../../../components/dashboard/business/BusinessTable";

const Businesses = () => {
    const {
        noOfUsers, searchText, handleChange } = useBusinesses();


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
            <BusinessTable />
        </>
    );
};
export default Businesses;