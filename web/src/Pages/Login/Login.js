import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRedux } from "../../redux/userSlice";

const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      const axiosUser = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/user/login`,
        {
          data,
        },
        { withCredentials: true }
      );
      const refreshToken = document.cookie
        .split(";")
        .reduce((ac, cv, i) => Object.assign(ac, { [cv.split("=")[0]]: cv.split("=")[1] }), {});
      const dataUser = { ...axiosUser.data, ...refreshToken };
      dispatch(loginRedux(dataUser));
      localStorage.setItem("user", dataUser.refreshToken);
      localStorage.setItem("token", dataUser.token);
      localStorage.setItem("role", dataUser.role);
      localStorage.setItem("email", dataUser.email);
      localStorage.setItem("lastName", dataUser.lastName);
      localStorage.setItem("firstName", dataUser.firstName);
      toast.success(axiosUser.data.message);
      if (axiosUser.data.alert) {
        navigate("/");
      }
    } else {
      toast.error("Vui lòng nhập đủ thông tin");
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("instructions")}>
        <img
          className={cx("instructions-img")}
          src="https://shopdunk.com/images/uploaded/banner/TND_M402_010%201.jpeg"
          alt="Not found!"
        />
      </div>
      <div className={cx("login")} onSubmit={handleSubmit}>
        <form className={cx("form-login")}>
          <h1 className={cx("heading")}>Đăng Nhâp</h1>
          <div className={cx("login-item")}>
            <label className={cx("login-item-label")}>E-mail:</label>
            <input
              className={cx("login-item-input")}
              name="email"
              type="email"
              onChange={handleOnChange}
            />
          </div>
          <div className={cx("login-item")}>
            <label className={cx("login-item-label")}>Mật khẩu:</label>
            <input
              className={cx("login-item-input")}
              name="password"
              type="password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className={cx("btnSubmit")}>
            Đăng nhập
          </button>
          <div className={cx("register")}>
            <b className={cx("register-question")}>Bạn Chưa Có Tài Khoản?</b>
            <a className={cx("register-link")} href="/register">
              Đăng Ký Ngay
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
