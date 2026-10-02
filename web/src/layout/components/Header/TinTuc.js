import PropTypes from "prop-types";
import classNames from "classnames/bind";

//
import config from "../../../config";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const TinTuc = ({ name, linkUrl, icon }) => {
  return (
    <div className={cx("menu-category")}>
      <a href={`/${linkUrl}`} className={cx("menu-category-link")}>
        <span>{name}</span>
        {icon && <div className={cx("menu-category-icon")}>{icon}</div>}
      </a>
      {icon && (
        <div className={cx("menu-category-link-absolute")}>
          <a className={cx("menu-category-link-absolute-a")} href={`/${config.routes.gocCamOn}`}>
            Góc cảm ơn
          </a>
        </div>
      )}
    </div>
  );
};

TinTuc.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default TinTuc;
