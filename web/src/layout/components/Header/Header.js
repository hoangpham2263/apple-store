import classNames from "classnames/bind";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, createContext } from "react";

//
import config from "../../../config";
import styles from "./Header.module.scss";
import HeaderItem from "./HeaderItem";
import DichVu from "./DichVu";
import TinTuc from "./TinTuc";
import User from "./User";
import Search from "../Search/Search";

//
const cx = classNames.bind(styles);
export const ToggleSearchFullscreenContext = createContext(null);

const Header = () => {
  const [blockSearchFullscreen, setBlockSearchFullscreen] = useState(false);

  // handle search fullscreen
  const handleSearchFullscreen = (e) => {
    e.preventDefault();
    setBlockSearchFullscreen((pre) => !pre);
    console.log(blockSearchFullscreen);
  };

  // handle close
  const handleClose = () => {
    setBlockSearchFullscreen((pre) => !pre);
  };
  return (
    <div className={cx("wrapper")}>
      <nav className={cx("navbar")}>
        {/* logo */}
        <div className={cx("navbar-item-logo")}>
          <a className={cx("logo-link")} href="/">
            <img
              className={cx("logo")}
              src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
              alt="logo"
            />
          </a>
        </div>
        {/* menu category */}
        <div className={cx("navbar-item-menu")}>
          <HeaderItem name={"iPhone"} linkUrl={"iphone"} />
          <HeaderItem name={"iPad"} linkUrl={"ipad"} />
          <HeaderItem name={"Mac"} linkUrl={"mac"} />
          <HeaderItem name={"Watch"} linkUrl={"watch"} />
          <HeaderItem name={"Âm thanh"} linkUrl={"am-thanh"} />
          <HeaderItem name={"Phụ kiện"} linkUrl={"phu-kien"} />
          <DichVu name={"Dịch vụ"} linkUrl={"dich-vu"} icon={<MdKeyboardArrowDown />} />
          <TinTuc name={"Tin tức"} linkUrl={"tin-tuc"} icon={<MdKeyboardArrowDown />} />
          <HeaderItem name={"Khuyến mãi"} linkUrl={"khuyen-mai"} />
        </div>
        {/* social */}
        <div className={cx("navbar-item-social")}>
          <div className={cx("social-category")}>
            <a href="/" className={cx("social-category-link")} onClick={handleSearchFullscreen}>
              <FiSearch />
            </a>
          </div>
          <div className={cx("social-category")}>
            <a href={`${config.routes.cart}`} className={cx("social-category-link")}>
              <FiShoppingCart />
              <div className={cx("car-quantity")}>0</div>
            </a>
          </div>
          <div className={cx("social-category")}>
            <User icon={<FiUser />} />
          </div>
        </div>
        {/* search fullscreen */}
        <ToggleSearchFullscreenContext.Provider value={handleClose}>
          <Search blockSearchFullscreen={blockSearchFullscreen} handleClose={handleClose} />
        </ToggleSearchFullscreenContext.Provider>
      </nav>
    </div>
  );
};

export default Header;
