import type { SvgIconProps } from "../../../../types/propTypes";

const UsersIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-users-icon lucide-users"
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="9" cy="7" r="4" />
        </svg>
    );
};
const ContactIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            width="24"
            fill="none"
            height="24"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="lucide lucide-contact-icon lucide-contact"
            {...props}
        >
            <path d="M16 2v2" />
            <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            <path d="M8 2v2" />
            <circle cx="12" cy="11" r="3" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
        </svg>
    );
};
const LegalIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scale-icon lucide-scale"
            {...props}
        >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
    );
};
const QnaIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield-question-mark-icon lucide-shield-question-mark"
            {...props}
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
        </svg>
    );
};
const LeadPolicyIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield-half-icon lucide-shield-half"
            {...props}
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M12 22V2" />
        </svg>
    );
};
const PaymentPolicyIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-receipt-indian-rupee-icon lucide-receipt-indian-rupee"
            {...props}
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M8 7h8" />
            <path d="M12 17.5 8 15h1a4 4 0 0 0 0-8" />
            <path d="M8 11h8" />
        </svg>
    );
};

const GiveReviewIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-message-square-diff-icon lucide-message-square-diff"
            {...props}
        >
            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
            <path d="M10 15h4" />
            <path d="M10 9h4" />
            <path d="M12 7v4" />
        </svg>
    );
};
const LinkIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-link-icon lucide-link"
            {...props}
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
};
//new icons

const EyeOpenIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            width="24"
            height="24"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="lucide lucide-eye-icon lucide-eye"
            {...props}
        >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};
const EyeCloseIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            width="24"
            height="24"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="lucide lucide-eye-icon lucide-eye"
            {...props}
        >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
            {/* this */}
            <line x1="5" y1="5" x2="19" y2="19" />
        </svg>
    );
};
const CrossIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x-icon lucide-x"
            {...props}
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
};
const HamburgerIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
            {...props}
        >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
        </svg>
    );
};
const DashboardIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
            {...props}
        >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
    );
};
const GoogleBusinessIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            height="2185"
            width="2500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0.43 1064 928.69"
            {...props}
        >
            <linearGradient id="a" x1="0%" x2="99.999%" y1="49.999%" y2="49.999%">
                <stop offset=".03" stop-color="#4079d8" />
                <stop offset="1" stop-color="#4989f5" />
            </linearGradient>
            <g fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                    <rect
                        fill="#4989f5"
                        height="696.14"
                        rx="36.88"
                        width="931"
                        x="53.45"
                        y="232.98"
                    />
                    <path
                        d="M936.81 227.75H100.06c-25.92 0-46.09 200.6-46.09 226.52L512.2 929.12h424.61c26-.071 47.059-21.13 47.13-47.13V274.87c-.077-25.996-21.134-47.049-47.13-47.12z"
                        fill="url(#a)"
                    />
                    <path d="M266.03 349.56h266V.44H305.86z" fill="#3c4ba6" />
                    <path
                        d="M798.03 349.56h-266V.44H758.2zM984.45 66.62l.33 1.19c-.08-.42-.24-.81-.33-1.19z"
                        fill="#7babf7"
                    />
                    <path
                        d="M984.78 67.8l-.33-1.19C976.017 27.993 941.837.455 902.31.43H758.2L798 349.56h266z"
                        fill="#3f51b5"
                    />
                    <path
                        d="M79.61 66.62l-.33 1.19c.08-.42.24-.81.33-1.19z"
                        fill="#7babf7"
                    />
                    <path
                        d="M79.27 67.8l.33-1.19C88.033 27.993 122.213.455 161.74.43h144.12L266 349.56H0z"
                        fill="#7babf7"
                    />
                </g>
                <path
                    d="M266.48 349.47c0 73.412-59.513 132.925-132.925 132.925S.63 422.882.63 349.47z"
                    fill="#709be0"
                />
                <path
                    d="M532.33 349.47c0 73.412-59.513 132.925-132.925 132.925S266.48 422.882 266.48 349.47z"
                    fill="#3c4ba6"
                />
                <path
                    d="M798.18 349.47c0 73.412-59.513 132.925-132.925 132.925S532.33 422.882 532.33 349.47z"
                    fill="#709be0"
                />
                <path
                    d="M1064 349.47c0 73.412-59.513 132.925-132.925 132.925S798.15 422.882 798.15 349.47z"
                    fill="#3c4ba6"
                />
                <path
                    d="M931.08 709.6c-.47-6.33-1.25-12.11-2.36-19.49h-145c0 20.28 0 42.41-.08 62.7h84a73.05 73.05 0 0 1-30.75 46.89s0-.35-.06-.36a88 88 0 0 1-34 13.27 99.85 99.85 0 0 1-36.79-.16 91.9 91.9 0 0 1-34.31-14.87 95.72 95.72 0 0 1-33.73-43.1c-.52-1.35-1-2.71-1.49-4.09v-.15l.13-.1a93 93 0 0 1-.05-59.84A96.27 96.27 0 0 1 718.9 654c23.587-24.399 58.829-33.576 91.32-23.78a83 83 0 0 1 33.23 19.56l28.34-28.34c5-5.05 10.19-9.94 15-15.16a149.78 149.78 0 0 0-49.64-30.74 156.08 156.08 0 0 0-103.83-.91c-1.173.4-2.34.817-3.5 1.25A155.18 155.18 0 0 0 646 651a152.61 152.61 0 0 0-13.42 38.78c-16.052 79.772 32.623 158.294 111.21 179.4 25.69 6.88 53 6.71 78.89.83a139.88 139.88 0 0 0 63.14-32.81c18.64-17.15 32-40 39-64.27a179 179 0 0 0 6.26-63.33z"
                    fill="#fff"
                    fill-rule="nonzero"
                />
            </g>
        </svg>
    );
};
const StarIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star-icon lucide-star"
            {...props}
        >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
    );
};
const SettingIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-settings-icon lucide-settings"
            {...props}
        >
            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};
const HeadPhoneIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-headphones-icon lucide-headphones"
            {...props}
        >
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
    );
};
const ReplaceIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"
            {...props}
        >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    );
};

const ProfileIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-icon lucide-user"
            {...props}
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
};
const ProfileEditIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-pen-icon lucide-user-pen"
            {...props}
        >
            <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <circle cx="10" cy="7" r="4" />
        </svg>
    );
};

const SpreadSheetIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-spreadsheet-icon lucide-file-spreadsheet"
            {...props}
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M8 13h2" />
            <path d="M14 13h2" />
            <path d="M8 17h2" />
            <path d="M14 17h2" />
        </svg>
    );
};
const SpreadSheetEditIcon = (props: SvgIconProps = {}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-pen-line-icon lucide-file-pen-line"
            {...props}
        >
            <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
            <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <path d="M8 18h1" />
        </svg>
    );
};

export {
    EyeOpenIcon,
    EyeCloseIcon,
    GoogleBusinessIcon,
    StarIcon,
    QnaIcon,
    LegalIcon,
    ReplaceIcon,
    ContactIcon,
    SettingIcon,
    ProfileIcon,
    HeadPhoneIcon,
    LeadPolicyIcon,
    SpreadSheetIcon,
    ProfileEditIcon,
    GiveReviewIcon,
    LinkIcon,
    CrossIcon,
    DashboardIcon,
    HamburgerIcon,
    PaymentPolicyIcon,
    SpreadSheetEditIcon,
    UsersIcon
};
