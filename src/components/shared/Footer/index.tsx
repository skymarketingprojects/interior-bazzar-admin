import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  GoogleIcon,
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
} from "../../ui/Icons";
import { STATIC_ICONS, STATIC_IMAGES } from "../../../utils/constants/image";
import { PAGES } from "../../../utils/constants/app";
import { SOCIAL_MEDIA } from "../../../utils/constants/contact";
import useFooter from "./useFooter";
import { useModal } from "../../../context/ModalContext";
import FooterNext from "../Forms/QueryForm/FooterNext";
const Footer = () => {
  const { showModal } = useModal();
  const { email, footerLinks, handleEmailChange } = useFooter();
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showModal(<FooterNext email={email} />);
  };
  return (
    <footer className={styles.footer}>
      {/* Top Section: Links */}
      <div className={`container ${styles.top}`}>
        <ul className={styles.column}>
          <li>Interior design</li>
          <li>Modern interiors</li>
          <li>Home interior</li>
          <li>Interior decoration</li>
          <li>Interior styling</li>
          <li>Room design</li>
          <li>Home décor ideas</li>
          <li>Luxury interiors</li>
          <li>Interior designer near me</li>
          <li>3D interior design</li>
        </ul>
        <ul className={styles.column}>
          <li>Living room design</li>
          <li>Bedroom interior</li>
          <li>Kitchen interiors</li>
          <li>Modular kitchen</li>
          <li>Bathroom design</li>
          <li>Office interior</li>
          <li>Retail interior design</li>
          <li>Commercial interiors</li>
          <li>Studio apartment design</li>
          <li>Kids room décor</li>
        </ul>
        <ul className={styles.column}>
          <li>Sanitaryware</li>
          <li>Bathroom fittings</li>
          <li>Bathroom accessories</li>
          <li>Sanitary products</li>
          <li>Washroom solutions</li>
          <li>Premium sanitaryware</li>
          <li>Sanitaryware near me</li>
          <li>Branded sanitary fittings</li>
          <li>Luxury bathroom fittings</li>
          <li>Sanitary showroom</li>
        </ul>
        <ul className={styles.column}>
          <li>Sanitaryware</li>
          <li>Bathroom fittings</li>
          <li>Bathroom accessories</li>
          <li>Sanitary products</li>
          <li>Washroom solutions</li>
          <li>Premium sanitaryware</li>
          <li>Sanitaryware near me</li>
          <li>Branded sanitary fittings</li>
          <li>Luxury bathroom fittings</li>
          <li>Sanitary showroom</li>
        </ul>
      </div>

      {/* Middle Section */}
      <div className={`container ${styles.middle}`}>
        <div className={styles.leadsText}>
          <p>
            <strong>Get Filtered (sales qualified) leads</strong> for your
            Interior and Sanitary Business with
          </p>
          <h3>InteriorBazzar</h3>
        </div>

        <div className={styles.feedbackBox}>
          <div className={styles.gif}>
            <img
              className={styles.gifImage}
              src={STATIC_IMAGES.REVIEWGIF}
              alt=""
            />
          </div>
          <Link to={SOCIAL_MEDIA.GMBREVIEW} className={styles.feedbackBtn}>
            Give Us A Review
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`container ${styles.bottom}`}>
        <div className={styles.bottomLeft}>
          <div className={styles.links}>
            <Link to={PAGES.PLANS}>Plans</Link>
            <Link to={PAGES.BLOGS}>Blogs</Link>
            <Link to={PAGES.CONTACTUS}>Contact</Link>
          </div>
          <div className={styles.socials}>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.INSTAGRAM}
            >
              <InstagramIcon className={`${styles.socialMediaIcon}`} />
            </Link>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.YOUTUBE}
            >
              <YoutubeIcon className={`${styles.socialMediaIcon}`} />
            </Link>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.LINKEDIN}
            >
              <LinkedinIcon className={`${styles.socialMediaIcon}`} />
            </Link>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.FACEBOOK}
            >
              <FacebookIcon className={`${styles.socialMediaIcon}`} />
            </Link>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.TWITTER}
            >
              <TwitterIcon className={`${styles.socialMediaIcon}`} />
            </Link>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.WHATSAPPCONTACT}
            >
              <WhatsappIcon className={`${styles.socialMediaIcon}`} />
            </Link>
            <Link
              target="_blank"
              className={`${styles.socilaMediaLink}`}
              to={SOCIAL_MEDIA.GMB}
            >
              <GoogleIcon className={`${styles.socialMediaIcon}`} />
            </Link>
          </div>
        </div>

        <div className={` ${styles.bottomRight} ${styles.newsletter}`}>
          <span>Talk to our sales Team</span>
          <div className={styles.inputContainer}>
            <form onSubmit={handleSubmitForm} className={styles.inputWrapper}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
              <button type="submit">Send</button>
            </form>
            <span className={styles.or}>Or</span>
            <Link to={SOCIAL_MEDIA.WHATSAPPCONTACT}>
              <img
                src={STATIC_ICONS.WHATSAPP}
                className={styles.whatsapp}
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.bottomWrapper}`}>
        <div className={`container ${styles.bottomContainer}`}>
          <ul className={`${styles.footerLinks}`}>
            {footerLinks.map((link) => (
              <li className={styles.footerLink} key={link.label}>
                <Link to={link.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className={`${styles.line}`} />
          <span className={styles.copyright}>
            {" "}
            &copy; interiorbazzar 2024. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
