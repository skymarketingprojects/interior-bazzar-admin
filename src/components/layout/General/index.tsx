import CtaIcons from "../../shared/CtaIcons";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <CtaIcons />
        </>
    )
}
export default GeneralLayout;