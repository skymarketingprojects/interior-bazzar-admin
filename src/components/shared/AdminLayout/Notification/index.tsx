import styles from "./Notification.module.css"
import { useEffect, useRef } from "react";
const Notification = ({ isOpen, toggle }: { isOpen: boolean, toggle?: () => void }) => {
    const tabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && tabRef.current && !tabRef.current.contains(event.target as Node)) {
                toggle?.();
            }
        };

        const handleEscKey = (event: KeyboardEvent) => {
            if (isOpen && event.key === "Escape") {
                toggle?.();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpen, toggle]);

    useEffect(() => {
        if (isOpen && tabRef.current) {
            const focusableElements = tabRef.current.querySelectorAll<HTMLElement>(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
            );
            focusableElements[0]?.focus();
        }
    }, [isOpen]);
    return (
        <>


            <div
                ref={tabRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="notificationTitle"
                className={`${styles.notificationTab} ${isOpen ? styles.open : ""}`}
            >
                <div className={`${styles.tabHeader}`}>
                    <h3>Notifications</h3>
                    <button onClick={toggle}>✕</button>
                </div>
                <div className={`${styles.tabContent}`}>
                    <p>🔔 New order received!</p>
                    <p>📦 Shipment delivered.</p>
                    <p>💬 New message from admin.</p>
                </div>
            </div>
        </>
    )
};
export default Notification;