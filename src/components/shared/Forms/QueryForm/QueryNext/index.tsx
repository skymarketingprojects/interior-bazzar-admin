import useQueryNext from "./useQueryNext";
import styles from "./QueryNext.module.css";
import { STATIC_IMAGES } from "../../../../../utils/constants/image";
import { Button, Input, SelectPrimitive, Textarea } from "../../../../ui";
const QueryNext = ({
  leadType,
  phoneNumber,
}: {
  leadType: string | undefined;
  phoneNumber: string;
}) => {
  const {
    step,
    businessTypeOptions,
    budgetOptions,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleSubmit2,
  } = useQueryNext(leadType, phoneNumber);
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
              id="businessType"
              name="businessType"
              value={formData.businessType}
              placeholder="Choose your business type"
              options={businessTypeOptions}
              onChange={handleChange}
            />
            <SelectPrimitive
              id="budget"
              name="budget"
              value={formData.budget}
              placeholder="Choose your budget"
              options={budgetOptions}
              onChange={handleChange}
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
            <div className={`${styles.inputSection}`}>
              {/* <h6 className={`${styles.inputTitle}`}>For faster response</h6> */}
              <Input
                name="email"
                type="email"
                placeholder="Enter contact email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Input
              name="noOfEmp"
              type="text"
              placeholder="Enter no of employees"
              value={formData.noOfEmp}
              onChange={handleChange}
            />
            <Input
              id="companyName"
              name="companyName"
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
export default QueryNext;
