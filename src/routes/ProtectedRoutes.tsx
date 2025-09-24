// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store/hook";
import { PAGES } from "../utils/constants/app";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to={PAGES.SIGN_IN} replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
