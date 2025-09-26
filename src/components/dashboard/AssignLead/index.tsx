import type { AdminLeadType } from "../../../types/content";
import useAssignLead from "./useAssignLead";
import styles from "./AssignLead.module.css";
import { Input } from "../../ui";
const AssignLead = ({ lead }: { lead: AdminLeadType }) => {
    const {
        loading,
        searchText,
        isDetailLoading, isSearchEmptyState,
        handleSearchTextChange,
        searchResults,
        selectedBusiness,
        handleAssignLead,
        handleSelectBusiness,
    } = useAssignLead(lead);
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchContainer}>
                <Input
                    value={searchText}
                    className={`${styles.searchInput}`}
                    onChange={handleSearchTextChange}
                    placeholder="Search business..."
                />
                {searchText && <div >
                    <ul className={styles.resultsListContainer}>
                        {loading.search ? <li>loading...</li> : searchResults.length > 0 ? searchResults.map((b) => (
                            <li key={b.id} onClick={() => handleSelectBusiness(b)}>
                                {b.businessName}
                            </li>
                        )) : "No businesses found"}
                    </ul>
                </div>}
            </div>
            <div>
                <h3>Business Inof</h3>
                {selectedBusiness && (
                    <div>
                        {loading.detail ? (
                            <p>Loading business info...</p>
                        ) : (
                            <>
                                <h3>{selectedBusiness.business_name}</h3>
                                <button disabled={loading.assign} onClick={handleAssignLead}>
                                    {loading.assign ? "Assigning..." : "Assign Lead"}
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div>
                <h3>Lead Info</h3>
                <p><strong>Name:</strong> {lead.name}</p>
                <p><strong>Email:</strong> {lead.email}</p>
                <p><strong>Phone:</strong> {lead.phone}</p>
            </div>
        </div>
    )
}
export default AssignLead;

