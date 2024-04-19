//
import PropTypes from "prop-types";

//
import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles);

const HomeLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
      <Footer />
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
