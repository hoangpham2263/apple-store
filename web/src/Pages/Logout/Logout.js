import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_DOMAIN}/user/logout`,
          null,
          {
            withCredentials: true,
          }
        );
        if (response.data.alert === true) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("email");
          localStorage.removeItem("lastName");
          localStorage.removeItem("firstName");
          toast.success("Đăng xuất thành công");
          navigate("/");
        } else {
          toast("Đăng xuất thất bại");
        }
      } catch (error) {
        console.log("Lỗi trong quá trình đăng xuất: ", error);
      }
    };
    const handleLogout = () => {
      logoutUser();
    };
    handleLogout();
  });

  return <div>Logging out...</div>;
};

export default Logout;
