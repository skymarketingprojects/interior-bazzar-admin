// Dialog.tsx
import styles from "./Dialog.module.css";
import { useEffect, useRef } from "react";

interface DialogProps {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const Dialog = ({ title, message, confirmText = "OK", cancelText = "Cancel", onConfirm, onCancel }: DialogProps) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    // Focus trap: Move focus to modal on open
    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement;
        dialogRef.current?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCancel();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            previouslyFocused?.focus();
        };
    }, [onCancel]);

    return (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-message">
            <div className={styles.dialog} ref={dialogRef} tabIndex={-1}>
                {title && <h2 id="dialog-title" className={styles.title}>{title}</h2>}
                <p id="dialog-message" className={styles.message}>{message}</p>
                <div className={styles.actions}>
                    <button className={styles.cancel} onClick={onCancel}>{cancelText}</button>
                    <button className={styles.confirm} onClick={onConfirm} autoFocus>{confirmText}</button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
