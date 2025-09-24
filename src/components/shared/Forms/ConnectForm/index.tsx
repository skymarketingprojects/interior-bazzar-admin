import styles from './ConnectForm.module.css';
import useConnectForm from './useConnectForm';
import { Button, Input, SelectPrimitive } from '../../../ui';



const ContactForm = () => {
    const { loading, formData, fields, handleSubmit, handleChange, handleFileChange } = useConnectForm();

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Connect with us!</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                {fields.map(field => {
                    if (field.type === "select" && field.options) {
                        return (
                            <SelectPrimitive
                                key={field.name}
                                options={field.options}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        );
                    }

                    if (field.type === "file") {
                        return (
                            <Input
                                type="file"
                                key={field.name}
                                name={field.name}
                                accept='image/*'
                                onChange={handleFileChange}
                                className={styles.input}
                            />
                        );
                    }

                    return (
                        <Input
                            key={field.name}
                            type={field.type}
                            name={field.name}
                            placeholder={field.label}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    );
                })}

                <Button disabled={loading} variant="gradient" type="submit" className={styles.submitBtn}>
                    {loading ? "Submitting..." : "  Submit"}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;

