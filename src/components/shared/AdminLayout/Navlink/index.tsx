import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.css";
const Navlink = ({ item, style = { radius: false, active: false }, onClick }: { item: { label: string, url: string }, style?: { radius: boolean, active?: boolean }, onClick?: () => void }) => {
    return (
        <NavLink
            onClick={onClick}
            to={item.url || ""}
            className={({ isActive }) => `${styles.navItem} ${style.radius ? styles.radius : ""} ${isActive || style.active ? styles.active : ""}`}
        >
            {item.label}
        </NavLink>
    );
}

export default Navlink;