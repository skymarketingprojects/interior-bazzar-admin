import { useRef } from "react";
import styles from "./MakePayment.module.css";
import useMakePayment from "./useMakePayment";
import { BANKING_DETAILS, CONTACTS } from "../../utils/constants/contact";
import { Button, Input, SelectInput } from "../../components/ui";
import { Link, useSearchParams } from "react-router-dom";
import { PAGES } from "../../utils/constants/app";
const MakePayment = () => {
    const [searchParams] = useSearchParams();
    const planId = searchParams.get("plan");
    const {
        plans,
        minutes,
        seconds,
        loading,
        userInfo,
        activePlan,
        handleSubmit,
        setTimeLeft,
        // uploadProgress,
        // isImageUploading,
        formatIndianPrice,
        handlePlanChange,
        handleImageChange,
        handleUserInfoChange, } = useMakePayment(planId);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.wrapper}>
            {/* Header */}
            <div className={styles.banner}>
                <p>Use Direct Payment Method for Faster Response</p>
                <p>SECURE PAYMENT TRANSACTION (100%)</p>
            </div>

            <div className={`container ${styles.container}`}>
                {/* Session Expire */}
                <div className={styles.session}>
                    <h3 className={styles.sessionTitle}>Session Expire</h3>
                    <p onClick={() => setTimeLeft(10)} className={styles.timer}>00:{minutes}:{seconds}s</p>
                </div>

                <div className={styles.grid}>
                    {/* Left Form */}
                    <div className={styles.formCard}>
                        <h3 className={styles.heading}>How to Make Payment ?</h3>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <SelectInput
                                className={`${styles.input}`}
                                name="plan"
                                displayKey="name"
                                value={activePlan?.id}
                                onChange={handlePlanChange}
                                options={plans}
                            />
                            <Input
                                className={`${styles.input}`}
                                id="name"
                                name="name"
                                onChange={handleUserInfoChange}
                                value={userInfo.name}
                                type="text"
                                placeholder="Name"
                            />
                            <Input
                                className={`${styles.input}`}
                                id="email"
                                name="email"
                                onChange={handleUserInfoChange}
                                value={userInfo.email}
                                type="email"
                                placeholder="Email "
                            />
                            <Input
                                className={`${styles.input}`}
                                type="tel"
                                id="phone"
                                name="phone"
                                onChange={handleUserInfoChange}
                                value={userInfo.phone}
                                placeholder="Phone "
                            />
                            <Input
                                className={`${styles.input}`}
                                type="text"
                                id="transactionId"
                                name="transactionId"
                                onChange={handleUserInfoChange}
                                value={userInfo.transactionId}
                                placeholder="Transaction ID"
                            />
                            <div className={styles.row}>
                                <Input
                                    className={`${styles.input}`}
                                    name="country"
                                    id="country"
                                    onChange={handleUserInfoChange}
                                    value={userInfo.country}
                                    type="text"
                                    placeholder="Country"
                                />
                                <Input
                                    className={`${styles.input}`}
                                    name="state"
                                    id="state"
                                    onChange={handleUserInfoChange}
                                    value={userInfo.state}
                                    type="text"
                                    placeholder="State"
                                />
                            </div>
                            <div
                                className={styles.upload}
                                onClick={handleUploadClick}
                            >
                                <input
                                    hidden
                                    type="file"
                                    ref={inputRef}
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <p>Upload Payment Screenshot</p>
                            </div>
                            {userInfo.attachment_url && (
                                <div className={styles.paymentScreenshotContainer}>
                                    <img
                                        alt="Payment Screenshot"
                                        src={userInfo.attachment_url}
                                        className={`${styles.paymentScreenshot}`}
                                    />
                                </div>
                            )}
                            <Button
                                radius
                                type="submit"
                                variant="gradient"

                            >
                                Submit
                            </Button>
                        </form>
                    </div>

                    {/* Right Order Summary */}
                    <div className={styles.rightColumn}>
                        <div className={styles.orderCard}>
                            <h4>Order Summary</h4>
                            <table>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Plan</th>
                                    <td>{activePlan?.name}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Amount</th>
                                    <td>{activePlan?.price}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>GST</th>
                                    <td>18%</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Payable</th>
                                    <td>{formatIndianPrice(activePlan?.price, 1.18)}</td>
                                </tr>
                            </table>
                        </div>

                        <div className={styles.bankCard}>
                            <h4>{BANKING_DETAILS.RECEIVER_NAME}</h4>
                            <table>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Account Type:</th>
                                    <td>{BANKING_DETAILS.ACCOUNT_TYPE}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Account No:</th>
                                    <td>{BANKING_DETAILS.ACCOUNT_NUMBER}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>IFSC:</th>
                                    <td>{BANKING_DETAILS.IFSC_CODE}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Bank:</th>
                                    <td>{BANKING_DETAILS.BANK_NAME}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>Branch:</th>
                                    <td>{BANKING_DETAILS.BRANCH_NAME}</td>
                                </tr>
                                <tr className={`${styles.tableRow}`}>
                                    <th>UPI:</th>
                                    <td>{BANKING_DETAILS.UPI_ID}</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>

                {/* Note */}
                <div className={styles.note}>
                    <h4>Note:</h4>
                    <p>
                        To activate your hosting plan, we kindly ask you to upload a screenshot of your payment
                        that clearly shows the transaction ID. You can provide proof of payment through Paytm,
                        PhonePe, Net-banking, Bank SMS, or any other verified payment method. This helps us verify
                        your payment quickly and ensures a smooth activation process for your plan. Thank you for
                        choosing our services.
                    </p>
                </div>

                {/* Footer Contact */}
                <div className={styles.footer}>
                    <div className={styles.contactItem}>
                        <Link to={`tel:${CONTACTS.PHONE1}`}>+91-{CONTACTS.PHONE1}</Link>
                    </div>
                    <div className={styles.contactItem}>
                        <Link to={`mailto:${CONTACTS.HELPEMAIL}`}>{CONTACTS.HELPEMAIL}</Link>
                    </div>
                </div>

                <Link to={PAGES.FAQ} className={styles.link}>Get in touch</Link>
            </div>
        </div>
    )
}
export default MakePayment;