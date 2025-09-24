import styles from "./NavIcon.module.css";
const NavIcon = ({ link, onLinkClick, isActive }: { link: any, onLinkClick: (value: string) => void, isActive: boolean }) => {
    return (
        <div onClick={() => onLinkClick(link.value)} className={`${styles.navIconWrapper}`}>
            <div className={`${styles.navIconContainer} ${isActive && styles.active}`}>
                <link.icon className={`${styles.navIcon}`} />
            </div>
            <p className={`${styles.navLink}`}>{link.label}</p>
        </div>
    );
};

export default NavIcon;
