import PropTypes from "prop-types";
import classNames from "classnames/bind";

//
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const HeaderItem = ({ name, linkUrl }) => {
  return (
    <div className={cx("menu-category")}>
      <a href={`/${linkUrl}`} className={cx("menu-category-link")}>
        <span>{name}</span>
      </a>
    </div>
  );
};

HeaderItem.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default HeaderItem;
