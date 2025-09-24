import CtaIcons from "../../shared/CtaIcons";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import TopStrip from "../../shared/TopStrip";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TopStrip />
            <Header />
            {children}
            <CtaIcons />
            <Footer />
        </>
    )
}
export default GeneralLayout;