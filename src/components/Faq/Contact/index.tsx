import styles from './Contact.module.css';
import { CONTACTS } from "../../../utils/constants/contact"
const ContactInfo = () => {
    return (
        <div className={`container ${styles.container}`}>
            {/* Left Side */}
            <div className={styles.left}>
                <h3 className={`${styles.title} ${styles.borderBottom}`}>CONTACT INFO</h3>
                <p className={`${styles.text} ${styles.borderBottom}`}>
                    <span className={styles.label}>Lead:</span> <a href={`tel:${CONTACTS.PHONE1}`}>+91-{CONTACTS.PHONE1}</a>
                </p>
                <p className={`${styles.text} ${styles.borderBottom}`}>
                    <span className={styles.label}>Support:</span> <a href={`tel:${CONTACTS.PHONE2}`}>+91-{CONTACTS.PHONE2}</a>
                </p>
            </div>

            {/* Right Side */}
            <div className={styles.right}>
                <div className={styles.card}>
                    <span className={styles.badge}>Marketing:</span>
                    <a href={`mailto:${CONTACTS.MARKETINGEMAIL}`} className={styles.email}>
                        {CONTACTS.MARKETINGEMAIL}
                    </a>
                    <p className={styles.desc}>(Strategic Collaboration)</p>
                </div>
                <div className={styles.card}>
                    <span className={styles.badge}>Support/Help:</span>
                    <a href={`mailto:${CONTACTS.HELPEMAIL}`} className={styles.email}>
                        {CONTACTS.HELPEMAIL}
                    </a>
                    <p className={styles.desc}>(plans/custom-quote/need help)</p>
                </div>



                <div className={styles.card}>
                    <span className={styles.badge}>Career:</span>
                    <a href={`mailto:${CONTACTS.CAREER}`} className={styles.email}>
                        {CONTACTS.CAREER}
                    </a>
                    <p className={styles.desc}>(HR Operations)</p>
                </div>

                <div className={styles.card}>
                    <span className={styles.badge}>Helo:</span>
                    <a href={`mailto:${CONTACTS.HELLO}`} className={styles.email}>
                        {CONTACTS.HELLO}
                    </a>
                    <p className={styles.desc}>
                        (influencers and media queries  )
                    </p>
                </div>
            </div>
        </div >
    );
};

export default ContactInfo;
