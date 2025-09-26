import type { AdminLeadFormType, AdminLeadType } from "../../../../types/content";
import { Button, Input, SelectInput } from "../../../ui";
import styles from "./LeadForm.module.css";
import useLeadForm from "./useLeadForm";

interface LeadFormProps {
    lead?: AdminLeadType;
    onSubmit: (data: AdminLeadFormType) => void;
}
const LeadForm: React.FC<LeadFormProps> = ({ lead, onSubmit }) => {
    const {

        statusOptions,
        priorityOptions,
        formData,

        handleSubmit,
        handleLeadChange,
    } = useLeadForm(lead, onSubmit);
    return (
        <div className={`${styles.container}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <p>{formData.name}</p>
                    {/* <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="phone">Phone</label>
                    <p>{formData.phone}</p>
                    {/* <Input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <p>{formData.email}</p>
                    {/* <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="interested">Interested</label>
                    <p>{formData.interested}</p>
                    {/* <Input
                        type="text"
                        id="interested"
                        name="interested"
                        value={formData.interested}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="query">Query</label>
                    <p>{formData.query}</p>
                    {/* <Input
                        type="text"
                        id="query"
                        name="query"
                        value={formData.query}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="city">City</label>
                    <p>{formData.city}</p>
                    {/* <Input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="state">State</label>
                    <p>{formData.state}</p>
                    {/* <Input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleLeadChange}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="country">Country</label>
                    <p>{formData.country}</p>
                    {/* <Input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleLeadChange}
                    /> */}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="tag">Tag</label>
                    <p>{formData.tag}</p>
                    {/* <SelectInput

                        id="tag"
                        name="tag"
                        displayKey="id"
                        value={formData.tag}
                        onChange={handleLeadChange}
                        options={priorityOptions}
                    /> */}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="status">Status</label>
                    <SelectInput
                        id="status"
                        name="status"
                        displayKey="id"
                        value={formData.status}
                        onChange={handleLeadChange}
                        options={statusOptions}
                    />


                </div>



                <div className={styles.inputGroup}>
                    <label htmlFor="remark">Remark</label>
                    <Input
                        type="text"
                        id="remark"
                        name="remark"
                        value={formData.remark}
                        onChange={handleLeadChange}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="priority">Priority</label>
                    <SelectInput
                        id="priority"
                        name="priority"
                        displayKey="id"
                        value={formData.priority}
                        onChange={handleLeadChange}
                        options={priorityOptions}
                    />
                </div>

                <Button variant="gradient" radius type="submit">Submit</Button>
            </form>

        </div>
    )
}
export default LeadForm;