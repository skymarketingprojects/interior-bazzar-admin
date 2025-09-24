import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "../utils/constants/app";
import AdminLayout from "../components/layout/Admin";
import FullPageLayout from "../components/layout/FullPage";
// Pages
import SignInPage from "../pages/auth/Signin";
import LeadDashboard from "../components/dashboard/Leads";
import BusinessInfo from "../components/dashboard/BusinessInfo";
import Profile from "../components/dashboard/Profile";
import useInitUser from "../hooks/auth/useInitUser";
import ScrollToTop from "../components/shared/ScrollToTop";

const UserRoutes = () => {
  useInitUser();
  const routesConfig = {
    fullPage: [
      { path: PAGES.HOME, element: <SignInPage /> },
    ],
    admin: [
      { path: PAGES.ADMIN_LEADS, element: <Profile /> },
      { path: PAGES.ADMIN_BUSINESS, element: <LeadDashboard /> },
      { path: PAGES.ADMIN_ANALYTICS, element: <BusinessInfo /> },
    ],
  };
  const renderRoutesWithLayout = (
    routes: { path: string; element: React.ReactNode }[],
    Layout: (props: { children: React.ReactNode }) => JSX.Element
  ) =>
    routes.map(({ path, element }) => (
      <Route key={path} path={path} element={<Layout>{element}</Layout>} />
    ));
  return (
    <>
      <ScrollToTop />
      <Routes>
        {renderRoutesWithLayout(routesConfig.fullPage, FullPageLayout)}
        {renderRoutesWithLayout(routesConfig.admin, AdminLayout)}
      </Routes>
    </>
  );
};
export default UserRoutes;



/* 

https://interiorbazzar.com/seller-buyer
https://interiorbazzar.com/blog
https://interiorbazzar.com/blog/best-interior-leads-platform-in-india---interior-bazzar-6
https://interiorbazzar.com/plan
https://interiorbazzar.com/faqs
https://interiorbazzar.com/disclaimer
https://interiorbazzar.com/return-and-refund-policy
https://interiorbazzar.com/terms-and-conditions"
https://interiorbazzar.com/privacy-policy
https://interiorbazzar.com/sign-up
https://interiorbazzar.com/sign-in
https://interiorbazzar.com/contact-us",
*/