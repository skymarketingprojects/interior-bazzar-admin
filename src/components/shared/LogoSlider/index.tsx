import React, { useEffect, useRef } from "react";
import styles from "./LogoSlider.module.css";

const LogoSlider: React.FC = () => {
    const logosRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logosRef.current && slideRef.current) {
            const clone = slideRef.current.cloneNode(true);
            logosRef.current.appendChild(clone);
        }
    }, []);

    return (
        <div ref={logosRef} className={styles.logos}>
            <div ref={slideRef} className={styles.logosSlide}>
                <img src="https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/dfd0168f-b03e-4962-8885-555b725c382e_Safe-nivesh.jpg" alt="Grantham Logo 1" />
                <img src="https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/d8a8ad16-0fb2-4426-a4f0-c8c830adf811_jagatpura.jpg" alt="Grantham Logo 2" />
                <img src="https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/136d0f44-dc14-4dae-bf7b-9b7420edea2f_lavanya.jpg" alt="Grantham Logo 1" />
                <img src="https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/986229cd-ad28-46c8-98d2-d1e41170b59e_shree-shyam.jpg" alt="Grantham Logo 2" />
                <img src="https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/6033dce9-fda9-489a-845d-71c7b8091a59_Climb.jpg" alt="Grantham Logo 2" />
            </div>
        </div>
    );
};

export default LogoSlider;
