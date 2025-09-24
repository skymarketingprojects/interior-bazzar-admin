import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: "default" | "gradient" | "delete" | "edit" | "theme" | "contact" | "view";
    radius?: Boolean;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: "default" | "gradient" | "delete" | "edit" | "theme" | "contact" | "view";
    radius?: Boolean;
    to: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    radius = false,
    type = "button",
    variant = "theme",
    ...rest
}) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${radius && styles.radiusLg}  ${styles[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

const MovingBorderButton: React.FC<ButtonProps> = ({
    children,
    className = "",
    type = "button",
    variant = "default",
    ...rest
}) => {
    return (
        <div className={`${styles.movingBackground}`}>
            <button
                type={type}
                className={`${styles.movingBorderButtonBase} ${styles.moveborder} `}
                {...rest}
            >
                {children}
            </button>
        </div>
    );
}

const CTAButton: React.FC<ButtonProps> = ({
    children,
    className = "",
    type = "button",
    variant = "theme",
    radius = true,
    ...rest
}) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles.ctaButton} ${styles[variant]} ${radius && styles.radius} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}

const CtaLink: React.FC<LinkProps> = ({
    children,
    className = "",
    type = "button",
    variant = "theme",
    radius = true,
    to = "",
    ...rest
}) => {
    return (
        <Link
            to={to}
            type={type}
            className={`${styles.button} ${styles.ctaLink} ${styles[variant]} ${radius && styles.radius} ${className}`}
            {...rest}
        >
            {children}
        </Link>
    );
}

export default Button;
export { CTAButton, MovingBorderButton, CtaLink };