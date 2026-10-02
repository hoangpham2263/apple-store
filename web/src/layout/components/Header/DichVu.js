import PropTypes from "prop-types";
import classNames from "classnames/bind";

//
import config from "../../../config";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const DichVu = ({ name, linkUrl, icon }) => {
  return (
    <div className={cx("menu-category")}>
      <a href={`/${linkUrl}`} className={cx("menu-category-link")}>
        <span>{name}</span>
        {icon && <div className={cx("menu-category-icon")}>{icon}</div>}
      </a>
      {icon && (
        <div className={cx("menu-category-link-absolute")}>
          <a className={cx("menu-category-link-absolute-a")} href={"/"}>
            Bảo Hành Uỷ Quyền Apple (ShopDunk Care)
          </a>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.traGop}`}>
            Trả Góp
          </a>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.thuCuDoiMoi}`}>
            Thu Cũ Đổi Mới
          </a>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.workshop}`}>
            WorkShop
          </a>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.MBTi}`}>
            MBTi
          </a>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.sim}`}>
            Sim Thẻ
          </a>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.appleCare}`}>
            Apple Care
          </a>
        </div>
      )}
    </div>
  );
};

DichVu.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default DichVu;
