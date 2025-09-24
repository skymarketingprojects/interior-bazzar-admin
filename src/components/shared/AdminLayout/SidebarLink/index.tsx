import { NavLink } from "react-router-dom";
import styles from "./SidebarLink.module.css";
import type { NavlinkItem } from "../../../../types/global";
const SidebarLink = (
    { item, style = { radius: false, active: false }, isOpen, }:
        { item: NavlinkItem, style?: { radius: boolean, active?: boolean }, isOpen?: boolean }) => {
    let classNames = style.radius && styles.radius;
    classNames = classNames + " " + (!isOpen && styles.justify);
    classNames = classNames + " " + (isOpen && styles.padding);


    return (
        <NavLink
            to={item.url || ""}
            className={({ isActive }) => `${styles.navItem} ${classNames} ${isActive || style.active ? styles.active : ""}`}
        >
            <span className={styles.iconSpan}>
                {item?.icon && <item.icon />}
            </span>
            {isOpen &&
                <span className={styles.label}>
                    {item.label}
                </span>}
        </NavLink>
    );
}

export default SidebarLink;