import type React from "react";
import useQueryForm from "./useQueryForm";
import styles from "./QueryForm.module.css";
import { Button, Input, SelectPrimitive } from "../../../ui";
import { HeadPhoneIcon, SettingIcon, ReplaceIcon } from "../../../ui/Icons/SVG";
import { useModal } from "../../../../context/ModalContext";
import QueryNext from "./QueryNext";
const QueryForm = () => {
  const { formData, services, handleFormChange } = useQueryForm();
  const features = [
    {
      feature: "Sales qualified leads",
      icon: SettingIcon,
    },
    {
      feature: "Instant support",
      icon: HeadPhoneIcon,
    },
    {
      feature: "Replacement Policy",
      icon: ReplaceIcon,
    },
  ];
  const { showModal } = useModal();
  const handleShowModal = (e: React.FormEvent) => {
    e.preventDefault();
    showModal(
      <QueryNext
        leadType={formData.leadType}
        phoneNumber={formData.phoneNumber}
      />
    );
  };
  return (
    <>
      <div className={`container ${styles.wrapper}`}>
        {/* Left side features */}
        <div className={styles.features}>
          {features.map((feature) => (
            <div className={styles.feature}>
              <feature.icon className={styles.icon} />
              <span>{feature.feature}</span>
            </div>
          ))}
        </div>

        {/* Right side form */}
        <form onSubmit={handleShowModal} className={styles.formBox}>
          <SelectPrimitive
            id="leadType"
            name="leadType"
            options={services}
            value={formData.leadType}
            onChange={handleFormChange}
            placeholder="Select What you want"
            wrapperClassName={`{styles.selectWrapper}`}
          />
          <div className={styles.phoneInput}>
            <span className={styles.code}>+91-</span>
            <Input
              type="tel"
              name="phoneNumber"
              className={styles.input}
              placeholder="Phone Number"
              onChange={handleFormChange}
              value={formData.phoneNumber}
            />
          </div>

          <Button type="submit" className={styles.button}>
            {"Send Query"}
          </Button>
        </form>
      </div>
      <p className={`container ${styles.description}`}>
        Interior bazzar is the best interior leads platform in India to have
        high-quality results at a lower price, making luxury affordable. As a
        B2B & B2C aggregator, we apply best-in-class marketing practices to
        connect service providers and service seekers with the right fit at the
        right cost and quality. We are dedicated to delivering the best match
        for both clients and businesses.
      </p>
    </>
  );
};
export default QueryForm;
