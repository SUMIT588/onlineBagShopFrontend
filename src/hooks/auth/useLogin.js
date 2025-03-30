import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useToast } from "../toast/useToast";

const useLogin = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const login = async (credentials) => {
    try {
      const { data } = await axiosInstance.post("/users/login", credentials);
      showToast("Login successfully", "success");
      localStorage.setItem("token", data.token);
      //   navigate("/dashboard");
    } catch (error) {
      console.log(error, "error");
      showToast(error.response?.data?.message, "error");
      // console.error("Login failed:", error);
    } finally {
    }
  };

  return { login };
};

export default useLogin;
