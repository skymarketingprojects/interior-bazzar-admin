// components/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store/hook";
import { PAGES } from "../utils/constants/app";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (isAuthenticated) {
        return <Navigate to={PAGES.ADMIN_LEADS} replace />;
    }
    return <>{children}</>;
};

export default PublicRoute;
