import classNames from "classnames/bind";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState([false]);
  const [showConfirmPassword, setShowConfirmPassword] = useState([false]);
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    gender: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // handle
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.lastName &&
      data.firstName &&
      data.gender &&
      data.email &&
      data.mobile &&
      data.password &&
      data.confirmPassword
    ) {
      if (data.password === data.confirmPassword) {
        const axiosUser = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/register`, {
          data,
        });
        toast.success(axiosUser.data.message);
        if (axiosUser.data.alert) {
          navigate("/login");
        }
      } else {
        toast.error("Mật khẩu không trùm nhau lòng nhập lại");
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
      <div className={cx("register")}>
        <form className={cx("form-register")} onSubmit={handleSubmit}>
          <h1 className={cx("heading")}>Đăng Ký</h1>
          <div className={cx("register-item")}>
            <label className={cx("register-item-label")}>Nhập họ:</label>
            <input
              className={cx("register-item-input")}
              name="lastName"
              type="text"
              onChange={handleOnChange}
            />
          </div>
          <div className={cx("register-item")}>
            <label className={cx("register-item-label")}>Nhập tên:</label>
            <input
              className={cx("register-item-input")}
              name="firstName"
              type="text"
              onChange={handleOnChange}
            />
          </div>
          <div className={cx("register-male")}>
            <div className={cx("register-male-title-block")}>
              <label className={cx("register-male-title")}>Giới tính:</label>
            </div>
            <div className={cx("register-male-input-block")}>
              <input
                id={cx("gender-male")}
                className={cx("register-male-input")}
                value="male"
                type="radio"
                name="gender"
                onChange={handleOnChange}
              />
              <label htmlFor="gender-male" className={cx("register-male-label")}>
                Nam
              </label>
            </div>
            <div className={cx("register-male-input-block")}>
              <input
                id={cx("gender-female")}
                className={cx("register-male-input")}
                value="female"
                type="radio"
                name="gender"
                onChange={handleOnChange}
              />
              <label htmlFor="gender-female" className={cx("register-male-label")}>
                Nữ
              </label>
            </div>
          </div>
          <div className={cx("register-item")}>
            <label className={cx("register-item-label")}>E-mail:</label>
            <input
              className={cx("register-item-input")}
              name="email"
              type="email"
              onChange={handleOnChange}
            />
          </div>
          <div className={cx("register-item")}>
            <label className={cx("register-item-label")}>Điện thoại:</label>
            <input
              className={cx("register-item-input")}
              name="mobile"
              type="text"
              onChange={handleOnChange}
            />
          </div>
          <div className={cx("register-item")}>
            <label className={cx("register-item-label")}>Mật khẩu:</label>
            <input
              className={cx("register-item-input")}
              name="password"
              type={showPassword ? "password" : "text"}
              onChange={handleOnChange}
            />
            {data.password.length > 0 && (
              <div className={cx("register-item-icon")} onClick={handleShowPassword}>
                {showPassword ? <BiHide /> : <BiShow />}
              </div>
            )}
          </div>
          <div className={cx("register-item")}>
            <label className={cx("register-item-label")}>Nhập lại mật khẩu:</label>
            <input
              className={cx("register-item-input")}
              name="confirmPassword"
              type={showConfirmPassword ? "password" : "text"}
              onChange={handleOnChange}
            />
            {data.confirmPassword.length > 0 && (
              <div className={cx("register-item-icon")} onClick={handleShowConfirmPassword}>
                {showConfirmPassword ? <BiHide /> : <BiShow />}
              </div>
            )}
          </div>
          <button type="submit" className={cx("btnSubmit")}>
            Đăng ký
          </button>
          <div className={cx("login")}>
            <b className={cx("login-question")}>Bạn Đã Có Tài Khoản?</b>
            <a className={cx("login-link")} href="/login">
              Đăng Nhập Ngay
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
