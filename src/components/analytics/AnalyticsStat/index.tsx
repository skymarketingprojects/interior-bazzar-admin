import React from "react";
import styles from "./AnalyticsStat.module.css";
import type { IconType } from "react-icons";
type SecondaryValue = {
    label: string;
    value: number | string;
    color?: string;
};

type AnalyticsStatProps = {
    icon: IconType;
    title: string;
    primaryValue: number | string;
    secondaryValues?: SecondaryValue[];
};

const AnalyticsStat: React.FC<AnalyticsStatProps> = ({
    icon: Icon,
    title,
    primaryValue,
    secondaryValues,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>{<Icon />}</div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <div className={styles.primaryValue}>{primaryValue}</div>
                {secondaryValues && (
                    <div className={styles.secondary}>
                        {secondaryValues.map((item, idx) => (
                            <div
                                key={idx}
                                className={styles.secondaryItem}
                                style={{ color: item.color || "#333" }}
                            >
                                {item.value} <small>{item.label}</small>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnalyticsStat;
