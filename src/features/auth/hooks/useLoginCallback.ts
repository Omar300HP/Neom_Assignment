import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../services/api";
import { useAppDispatch } from "../../../hooks";
import { setIsAuthenticated } from "../slices/authSlice";

const useLoginCallback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const loginCallback = async (email: string, password: string) => {
    const res = (await login({ reqBody: { email, password } })) as {
      data: { token: string };
    };

    if (res?.data?.token) {
      localStorage.setItem("token", res.data.token);
      dispatch(setIsAuthenticated(true));
      navigate("/dashboard");
    } else {
      localStorage.removeItem("token");
    }
  };

  return loginCallback;
};

export { useLoginCallback };
