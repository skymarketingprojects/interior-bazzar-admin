import styles from "./ContactCard.module.css";
import { EmailIcon, PhoneIcon } from "./../../../ui/";
import { Link } from "react-router-dom";
import { CONTACTS } from "../../../../utils/constants/contact";
const ContactCard = () => {
  return (
    <div className={`container ${styles.contactCardContainer}`}>
      <div className={styles.contactCard}>
        <EmailIcon className={styles.emailIcon} />
        <Link to={`mailto:${CONTACTS.MARKETINGEMAIL}`}>
          {CONTACTS.MARKETINGEMAIL}
        </Link>
      </div>
      <div className={styles.contactCard}>
        <PhoneIcon className={styles.phoneIcon} />
        <Link to={`tel:${CONTACTS.PHONE1}`}>{CONTACTS.PHONE1}</Link>
      </div>
    </div>
  );
};

export default ContactCard;
