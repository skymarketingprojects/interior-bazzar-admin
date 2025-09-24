import styles from "./FooterNext.module.css";
import useFooterNext from "./useFooterNext";
import { STATIC_IMAGES } from "../../../../../utils/constants/image";
import { Button, Input, SelectPrimitive, Textarea } from "../../../../ui";

const FooterNext = ({ email }: { email: string }) => {
  const {
    step,
    budgetOptions,
    businessTypeOptions,
    leadTypeOptions,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleSubmit2,
  } = useFooterNext(email);
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.imageContainer}`}>
        <img
          src={STATIC_IMAGES.FORMBG}
          alt="ads"
          className={`${styles.image}`}
        />
      </div>
      <div className={`${styles.formContainer}`}>
        <h4 className={`${styles.title}`}>Get best deal</h4>
        {step === 1 ? (
          <form onSubmit={handleSubmit} className={`${styles.form}`}>
            <SelectPrimitive
              name="leadType"
              id="leadType"
              placeholder="Choose your lead type you want"
              options={leadTypeOptions}
              onChange={handleChange}
              value={formData.leadType}
            />
            <SelectPrimitive
              name="businessType"
              id="businessType"
              placeholder="Choose your business type"
              options={businessTypeOptions}
              onChange={handleChange}
              value={formData.businessType}
            />
            <SelectPrimitive
              name="budget"
              id="budget"
              placeholder="Choose your yearly budget"
              options={budgetOptions}
              onChange={handleChange}
              value={formData.budget}
            />
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <Button
              disabled={loading}
              variant="gradient"
              radius={true}
              type="submit"
            >
              Submit
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubmit2} className={`${styles.form}`}>
            <Input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="noOfEmp"
              type="text"
              placeholder="Enter no of employees"
              value={formData.noOfEmp}
              onChange={handleChange}
            />
            <Input
              name="companyName"
              id="companyName"
              type="text"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
            />
            <Textarea
              name="query"
              placeholder="Enter your specifit requirements"
              value={formData.query}
              onChange={handleChange}
            />
            <div className={`${styles.inputContainer}`}>
              <Input
                name="city"
                type="text"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="state"
                placeholder="Enter your state"
                onChange={handleChange}
                value={formData.state}
              />
            </div>

            <Button
              disabled={loading}
              variant="gradient"
              radius={true}
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FooterNext;
