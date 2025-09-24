import styles from "./PlanQuoteForm.module.css";
import { Button, Input, SelectInput } from "../../../ui";
import usePlanQuoteForm from "./usePlanQuoteForm.tsx";
import { Textarea } from "../../../ui/InputField/index.tsx";
const PlanQuoteForm = () => {

    const {
        step,
        options,
        loading,
        formData,
        handleChange,
        handleSubmit,
        handleSubmit2, } = usePlanQuoteForm();
    return (
        <div className={`${styles.mainContainer}`}>

            <div className={`${styles.formContainer}`}>
                <h4 className={`${styles.title}`}>Get best deal</h4>
                {step === 1 ?
                    <form
                        onSubmit={handleSubmit}
                        className={`${styles.form}`}
                    >
                        <Input
                            type="tel"
                            onChange={handleChange}
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                        />
                        <SelectInput
                            name="interested"
                            options={options}
                            placeholder="Interested In"
                            displayKey="service"
                            onChange={handleChange}
                            value={formData.interested}
                        />
                        <Button disabled={loading} variant="gradient" radius={true} type="submit">Submit</Button>
                    </form>
                    :
                    <form onSubmit={handleSubmit2} className={`${styles.form}`}>
                        <Input
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            type="email"
                            placeholder="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Textarea
                            name="query"
                            placeholder="requirement"
                            value={formData.query}
                            onChange={handleChange}
                        />

                        <Button disabled={loading} variant="gradient" radius={true} type="submit">
                            Submit
                        </Button>
                    </form>}
            </div>
        </div>
    )
}
export default PlanQuoteForm;