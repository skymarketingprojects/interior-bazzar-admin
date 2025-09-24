import { Button, Input, Textarea } from "../../../ui";
import styles from "./ContactForm.module.css"
import useContactForm from "./useContactForm";
const ContactForm = () => {
    const { formData, loading, handleChange, handleSubmit, } = useContactForm();
    return (
        <div className={`${styles.formContainer}`}>
            <h5 className={`${styles.title}`}>Send Us a Message</h5>
            <form
                onSubmit={handleSubmit}
                className={`${styles.form}`}
            >
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Textarea
                    placeholder="Enter your requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button
                    radius
                    type="submit"
                    variant="gradient"
                    disabled={loading}
                >
                    Submit
                </Button>
            </form>

        </div >
    )
}
export default ContactForm;