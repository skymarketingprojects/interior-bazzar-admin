
import styles from "./SidebarLink.module.css"
const SidebarLink = ({ link, onLinkClick, isActive }: { link: any, onLinkClick: (value: string) => void, isActive: boolean }) => {

    return (

        <div onClick={() => onLinkClick(link.value)} className={`${styles.navIconContainer} ${isActive && styles.active}`}>
            <link.icon className={`${styles.navIcon}`} />
            <p className={`${styles.navLink}`}>{link.label}</p>
        </div>

    );
};

export default SidebarLink;
