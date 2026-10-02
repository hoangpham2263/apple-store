import classNames from "classnames/bind";
import { FaFacebookF } from "react-icons/fa";
import { SiYoutube, SiZalo } from "react-icons/si";

//
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("footer")}>
        {/*  */}
        <div className={cx("footer-new-letter-bg")}>
          <div className={cx("footer-new-letter")}>
            <div className={cx("heading-letter")}>Đăng ký nhận tin từ ShopDunk</div>
            <div className={cx("content-letter")}>
              Thông tin sản phẩm mới nhất và chương trình khuyến mãi
            </div>
            <div className={cx("email-letter")}>
              <input
                id="send-your-email"
                className={cx("email-letter-input")}
                name="sendYourEmail"
                placeholder="Email của bạn"
              />
              <button htmlFor="send-your-email" className={cx("email-letter-register")}>
                <label>Đăng ký</label>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={cx("information")}>
          {/*  */}
          <div className={cx("footer-upper")}>
            {/*  */}
            <div className={cx("upper-follow-us")}>
              <div className={cx("follow-us-logo")}>
                <a className={cx("logo-link")} href="/">
                  <img
                    className={cx("logo")}
                    src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className={cx("topic-block")}>
                Năm 2020, WanFit trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa
                hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm
                và dịch vụ của Apple cho người dùng Việt Nam.
              </div>
              <div className={cx("social")}>
                <a
                  className={cx("social-facebook")}
                  href="https://www.facebook.com/quochoang.pham.3701"
                >
                  <FaFacebookF />
                </a>
                <a className={cx("social-youtube")} href="https://www.youtube.com/">
                  <SiYoutube />
                </a>
                <a
                  className={cx("social-zalo")}
                  href="https://www.facebook.com/quochoang.pham.3701"
                >
                  <SiZalo />
                </a>
              </div>
            </div>
            {/*  */}
            <div className={cx("upper-information")}>
              <div className={cx("title")}>Thông tin</div>
              <div className={cx("list")}>
                <a className={cx("list-item")} href="/">
                  Tin Tức
                </a>
                <a className={cx("list-item")} href="/">
                  Giới thiệu
                </a>
                <a className={cx("list-item")} href="/">
                  Check lMEl
                </a>
                <a className={cx("list-item")} href="/">
                  Phương thức thanh toán
                </a>
                <a className={cx("list-item")} href="/">
                  Thuê điểm bán lẻ
                </a>
                <a className={cx("list-item")} href="/">
                  Bảo hành và sửa chữa
                </a>
                <a className={cx("list-item")} href="/">
                  Tuyển dụng
                </a>
                <a className={cx("list-item")} href="/">
                  Đánh giá chất lượng, khiếu nại
                </a>
                <a className={cx("list-item")} href="/">
                  Tra cứu hoá đơn điện tử
                </a>
              </div>
            </div>
            {/*  */}
            <div className={cx("upper-customer-service")}>
              <div className={cx("title")}>Chính sách</div>
              <div className={cx("list")}>
                <a className={cx("list-item")} href="/">
                  Thu cũ đổi mới
                </a>
                <a className={cx("list-item")} href="/">
                  Giao hàng
                </a>
                <a className={cx("list-item")} href="/">
                  Giao hàng (ZaloPay)
                </a>
                <a className={cx("list-item")} href="/">
                  Huỷ giao dịch
                </a>
                <a className={cx("list-item")} href="/">
                  Đổi trả
                </a>
                <a className={cx("list-item")} href="/">
                  Bảo hành
                </a>
                <a className={cx("list-item")} href="/">
                  Dịch vụ
                </a>
                <a className={cx("list-item")} href="/">
                  Giải quyết khiếu nại
                </a>
                <a className={cx("list-item")} href="/">
                  Bảo mật thông tin
                </a>
                <a className={cx("list-item")} href="/">
                  Hướng dẫn thanh toán qua VNPAY
                </a>
              </div>
            </div>
            {/*  */}
            <div className={cx("upper-my-account")}>
              <div className={cx("title")}>Địa chỉ & Liên hệ</div>
              <div className={cx("list")}>
                <a className={cx("list-item")} href="/">
                  Tài khoản của tôi
                </a>
                <a className={cx("list-item")} href="/">
                  Đơn đặt hàng
                </a>
                <a className={cx("list-item")} href="/">
                  Hệ thống cửa hàng
                </a>
                <a className={cx("list-item")} href="/">
                  Tìm Store trên Google Map
                </a>
                <a className={cx("list-item")} href="/">
                  Mua Hàng: 1900.2003
                </a>
                <span className={cx("list-item-location")}>
                  Nhánh 1: khu vực Hà Nội và các tỉnh phía bắc
                </span>
                <span className={cx("list-item-location")}>
                  Nhánh 2: khu vực Hồ Chí Minh và các tỉnh phía nam
                </span>
                <span className={cx("list-item-location")}>Nhánh 1: Khiếu nại và góp ý</span>
                <a className={cx("list-item")} href="/">
                  Doanh nghiệp: <span className={cx("list-item-tel")}>0971.955.144</span>
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={cx("footer-lower")}>
            <div className={cx("disclaimer")}>
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp
              <hr />
              ngày 08/06/2016. Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà
              Nội, Việt Nam
              <hr />
              Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com
            </div>
            <div className={cx("confirm")}>
              <a
                className={cx("confirm-link")}
                href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1"
              >
                <img
                  className={cx("confirm-image")}
                  src="https://shopdunk.com/images/uploaded-source/Trang%20ch%E1%BB%A7/Bocongthuong.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
