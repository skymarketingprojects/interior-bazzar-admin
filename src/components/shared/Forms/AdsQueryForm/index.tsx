import useAdsQuery from "./useAdsQuery.tsx";
import styels from "./AdsQueryForm.module.css";
import { Button, Input, } from "../../../ui";
import { STATIC_IMAGES } from "../../../../utils/constants/image";
const AdsQueryForm = () => {
    const {
        step,
        loading,
        formData,
        handleChange,
        handleSubmit,
        handleSubmit2,
    } = useAdsQuery();

    return (
        <div className={`${styels.mainContainer}`}>
            <div className={`${styels.imageContainer}`} >
                <img src={STATIC_IMAGES.FORMBG} alt="ads" className={`${styels.image}`} />
            </div>
            <div className={`${styels.formContainer}`}>
                <h4 className={`${styels.title}`}>Get best deal</h4>
                {step === 1 ?
                    <form
                        onSubmit={handleSubmit}
                        className={`${styels.form}`}
                    >

                        <Input
                            type="text"
                            name="interested"
                            value={formData.interested}
                            onChange={handleChange}
                            placeholder="Enter what you are looking for"
                        />
                        <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                        />
                        <Button disabled={loading} variant="gradient" radius={true} type="submit">Submit</Button>
                    </form>
                    :
                    <form onSubmit={handleSubmit2} className={`${styels.form}`}>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className={`${styels.inputSection}`}>
                            <h6 className={`${styels.inputTitle}`}>For faster response</h6>
                            <Input
                                name="email"
                                type="email"
                                placeholder="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <div className={`${styels.inputContainer}`}>

                                <Input
                                    name="city"
                                    type="text"
                                    placeholder="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    name="country"
                                    placeholder="country"
                                    onChange={handleChange}
                                    value={formData.country}
                                />
                            </div>
                        </div>
                        <Button disabled={loading} variant="gradient" radius={true} type="submit">
                            Submit
                        </Button>
                    </form>}
            </div>
        </div>
    )
}
export default AdsQueryForm;