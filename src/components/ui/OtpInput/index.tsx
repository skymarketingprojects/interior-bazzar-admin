import React, { useRef } from 'react';
import styles from './OtpInput.module.css';

type OtpInputProps = {
    length?: number;
    onChangeOtp: (otp: string) => void;
};

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onChangeOtp }) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value) {
            e.target.value = value[0];
            if (index < length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
        handleOtpChange();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpChange = () => {
        const otp = inputRefs.current.map(input => input?.value || '').join('')
        onChangeOtp(otp);
    };

    return (
        <div className={styles.otpContainer}>
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    ref={(el) => {
                        inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={styles.otpInput}
                />
            ))}
        </div>
    );
};

export default OtpInput;
