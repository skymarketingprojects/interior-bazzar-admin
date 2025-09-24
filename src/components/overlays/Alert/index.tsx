import styles from './Alert.module.css';
import { type AlertType } from '../../../types/global';
import React, { useState, useEffect, useRef } from 'react';

type AnchorOrigin =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

interface AlertProps {
    message: string;
    state: AlertType;
    setHandler: React.Dispatch<React.SetStateAction<{ message: string; type: AlertType } | null>>;
    position?: AnchorOrigin;
}

const Alert: React.FC<AlertProps> = ({
    message,
    setHandler,
    state = 'success',
    position = 'top-center',
}) => {
    const [visible, setVisible] = useState(false);
    const alertRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const timer = setTimeout(() => {
            setVisible(true);
        }, 0);


        const closeTimer = setTimeout(() => {
            handleClose();
        }, 3000);

        const handleClickOutside = (event: MouseEvent) => {
            if (alertRef.current && !alertRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            clearTimeout(timer);
            clearTimeout(closeTimer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

    const onAnimationEnd = () => {
        if (!visible) {
            setHandler(null);
        }
    };

    const [vertical, horizontal] = position.split('-');
    const classNames = `${styles[vertical]} ${styles[horizontal]} ${visible ? styles.slideIn : styles.slideOut
        } ${styles[position]}`;

    return (
        <div
            ref={alertRef}
            className={`${styles.alertContainer} ${classNames}`}
            onAnimationEnd={onAnimationEnd}
        >
            <div className={`${styles.alert} ${styles[state]}`}>
                <span>{message}</span>
                <button className={styles.closeButton} onClick={handleClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Alert;
