import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo_gray} className={cx("logo")} />
        <div className={cx("description")}>
          <p>© 2007 Tàng Thư Viện - Chính sách</p>
          <p>
            Tàng Thư Viện là sân chơi mở và free cho cộng đồng fan kiếm hiệp,
            tiên hiệp, ngôn tình. Chúc các bạn có những giây phút thư giãn thoải
            mái sau giờ làm việc và học tập căng thẳng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
