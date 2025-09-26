import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "../utils/constants/app";
import AdminLayout from "../components/layout/Admin";
import FullPageLayout from "../components/layout/FullPage";
// Pages
import SignInPage from "../pages/auth/Signin";
import LeadDashboard from "../components/dashboard/Leads";
import Businessses from "../components/dashboard/Businesses";
import Profile from "../components/dashboard/Profile";
import useInitUser from "../hooks/auth/useInitUser";
import ScrollToTop from "../components/shared/ScrollToTop";
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";
import AdminLoader from "../components/shared/AdminLoader";

const UserRoutes = () => {
  const { loading } = useInitUser();

  const routesConfig = {
    fullPage: [
      {
        path: PAGES.HOME,
        element: (
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        ),
      },
      {
        path: PAGES.SIGN_IN,
        element: (
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        ),
      },
    ],
    admin: [
      {
        path: PAGES.ADMIN_LEADS,
        element: (
          <ProtectedRoute>
            <LeadDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: PAGES.ADMIN_BUSINESS,
        element: (
          <ProtectedRoute>
            <Businessses />
          </ProtectedRoute>
        ),
      },
      {
        path: PAGES.ADMIN_ANALYTICS,
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  };

  const renderRoutesWithLayout = (
    routes: { path: string; element: React.ReactNode }[],
    Layout: (props: { children: React.ReactNode }) => JSX.Element
  ) =>
    routes.map(({ path, element }) => (
      <Route key={path} path={path} element={<Layout>{element}</Layout>} />
    ));

  if (loading) {
    return (
      <AdminLoader />
    )
  }

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
