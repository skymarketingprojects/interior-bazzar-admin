import styles from "./ContactUs.module.css";
import { ContactCard, } from "../../components/shared"
import { ContactForm } from "../../components/shared/Forms";
const ContactUs = () => {
    return (
        <div className={`container  ${styles.contactContainer}`}>
            <div>
                <div className={styles.message}>
                    <h2 className={styles.heading}>Lets Chat!</h2>
                    <p className={styles.text}>Tell us about your<br /> need.</p>
                </div>
                <ContactCard />
            </div>
            <div>
                <ContactForm />
            </div>
            <div className={styles.empty}>

            </div>
        </div>
    )
}
export default ContactUs;