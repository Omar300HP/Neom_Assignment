import { useEffect } from "react";
import { selectIsAuthenticated } from "../features/auth";
import { useAppDispatch, useAppSelector } from "../hooks";
import { checkIsNoAuthRequired } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "../features/auth/slices/authSlice";

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isNoAuthRequired = checkIsNoAuthRequired(pathname);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isNoAuthRequired) {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        dispatch(setIsAuthenticated(false));
      } else {
        dispatch(setIsAuthenticated(true));
      }
    }
  }, [dispatch, isAuthenticated, isNoAuthRequired, navigate, pathname]);

  return isAuthenticated || isNoAuthRequired ? <>{children}</> : null;
};

export default AuthProvider;
