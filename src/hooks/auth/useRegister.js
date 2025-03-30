import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useToast } from "../toast/useToast";

const useRegister = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const register = async (credentials) => {
    try {
      const { data } = await axiosInstance.post("/users/register", credentials);
      showToast("User registered successfully");
      navigate("/login");
    } catch (error) {
      showToast(error.response?.data?.message, "error");
      console.error("Register failed:", error);
    } finally {
    }
  };

  return { register };
};

export default useRegister;
