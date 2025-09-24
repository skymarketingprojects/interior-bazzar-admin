import useNeedForm from "./useNeedForm";
import styles from "./NeedForm.module.css"
import { Button, Input } from "../../../ui";
const NeedForm = () => {
    const { formData, handleChange, handleSubmit, loading } = useNeedForm();
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Send us a message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name"
                    onChange={handleChange}
                    className={styles.input}
                />
                <Input

                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={styles.input}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    value={formData.message}
                    className={styles.textarea}
                />
                <Button variant="gradient" disabled={loading} type="submit" className={styles.button}>
                    Submit
                </Button>
            </form>
        </div>
    )
}
export default NeedForm;
