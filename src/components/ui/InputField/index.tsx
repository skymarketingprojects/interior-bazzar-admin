import { AngleDown } from "../../ui";
import React, { useState } from "react";
import { EyeOpenIcon, EyeCloseIcon } from "../Icons/SVG";
import styles from "./Input.module.css";
import type { InputProps, SelectInputProps, SelectPrimitiveProps } from "./type"


const Input: React.FC<InputProps> = ({
    type = "text",
    placeholder = "Default Placeholer",
    value,
    onChange,
    name,
    id,
    className = "",
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;

    const togglePassword = () => setShowPassword((prev) => !prev);

    if (type === "password") {
        return (
            <div className={styles.passwordContainer}>
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    className={`${styles.input} ${className}`}
                    {...rest}
                />

                {showPassword ? (
                    <EyeOpenIcon onClick={togglePassword} className={styles.eyeIcon} />
                ) : (
                    <EyeCloseIcon onClick={togglePassword} className={styles.eyeIcon} />
                )}
            </div>
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            className={`${styles.input} ${className}`}
            {...rest}
        />
    );
};


const SelectInput = <T extends { id: number }>(
    {
        id,
        name,
        value,
        options,
        multiple = false,
        onChange,
        className = "",
        placeholder = "Select an option",
        displayKey,
        ...rest
    }: SelectInputProps<T>
) => {
    return (
        <div className={styles.selectWrapper}>
            <select
                id={id}
                name={name}
                value={value}
                multiple={multiple}
                onChange={onChange}
                className={`${styles.input} ${styles.select} ${className}`}
                {...rest}
            >
                <option value="" disabled hidden className={`${styles.option}`}>
                    {placeholder}
                </option>
                {options?.map((option, index) => {
                    if (typeof option === "string") {
                        return (
                            <option
                                key={index}
                                value={option}
                                className={styles.option}
                            >
                                {option}
                            </option>
                        )
                    } else {
                        return (
                            <option className={`${styles.option}`} key={option.id} value={option.id}>
                                {displayKey ? String(option[displayKey]) : String(option.id)}
                            </option>
                        )
                    }
                })}
            </select>
            <AngleDown className={styles.angleDown} />
        </div>


    );
};

const SelectPrimitive = ({
    id,
    name,
    value,
    options,
    multiple = false,
    onChange,
    className = "",
    wrapperClassName,
    placeholder = "Select an option",
    ...rest
}: SelectPrimitiveProps) => (

    <div
        className={`${styles.selectWrapper} ${wrapperClassName ? wrapperClassName : ""}`}>
        <select
            id={id}
            name={name}
            value={value}
            multiple={multiple}
            onChange={onChange}
            className={`${styles.input} ${styles.select} ${className}`}
            {...rest}
        >
            <option value="" disabled hidden>{placeholder}</option>
            {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
        <AngleDown className={styles.angleDown} />
    </div>
);

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
    className = "",
    ...rest
}) => {
    return (
        <textarea
            className={`${styles.textarea} ${className}`}
            {...rest}
        />
    );
};

export { SelectInput, SelectPrimitive, Textarea };
export default Input;
