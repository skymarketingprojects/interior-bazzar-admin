import React, { type JSX } from "react";
import {
    NavIcon,
    Contact,
    SearchBar,
    SidebarLink,
    // pages
    Qna,
    Legal,
    ContactUs,
    LeadPolicy,
    PaymentPage,
    ImportantLinks,
} from "../../components/Faq";
import FeedbackForm from "../../components/shared/Forms/FeedbackForm";
import { QueryForm } from "../../components/Home";
import styles from "./Faq.module.css"
import useFaq from "./useFaq";
type QnaObject = {
    [key: string]: () => JSX.Element;
};
const FaqPage = () => {
    const { links, onLinkClick, active } = useFaq();
    const pages: QnaObject = {
        "contactUs": ContactUs,
        "legal": Legal,
        "qna": Qna,
        "leadPolicy": LeadPolicy,
        "paymentPage": () => <PaymentPage />,
        "importantLinks": ImportantLinks,
        "feedback": () => <FeedbackForm />,

    };

    return (
        <div>
            <SearchBar />
            <div className={`container ${styles.container}`}>
                {links.slice(0, 4).map((link) =>
                    <NavIcon
                        link={link}
                        onLinkClick={onLinkClick}
                        isActive={active === link.value}
                    />
                )}
            </div>
            <div className={`container ${styles.contentContainer}`}>
                <div className={`scrollbar-hidden ${styles.faqheight} ${styles.sideBarLinkContainer}`} >
                    {links.map((link) =>
                        <SidebarLink
                            link={link}
                            onLinkClick={onLinkClick}
                            isActive={active === link.value}
                        />
                    )}
                </div>
                <div className={`scrollbar-hidden ${styles.faqheight} ${styles.faqContentContainer}`}>
                    {pages[active] && React.createElement(pages[active])}
                </div>
            </div>
            <Contact />
            <QueryForm />

        </div>
    );
}
export default FaqPage;