import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
  faBookJournalWhills,
  faMobileScreenButton,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./HomeHeader.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function HomeHeader() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("head-above")}>
        <div className={cx("inner")}>
          <img src={images.logo} alt="ttv" className={cx("logo")} />

          <Tippy
            render={(attrs) => (
              <div className="box" tabIndex="-1" {...attrs}>
                
              </div>
            )}
          >
            <div className={cx("search")}>
              <input
                placeholder="Nhập tên truyện hoặc tác giả"
                spellCheck="false"
              />

              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </Tippy>

          <div className={cx("action-above")}>
            <button className={cx("account-btn")}>
              {" "}
              <FontAwesomeIcon icon={faBookJournalWhills} className={cx('icon')} />{" "}
              <span>account</span>{" "}
            </button>
            <button className={cx("logout-btn")}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className={cx("head-below")}>
        <div className={cx("inner")}>
          <div className={cx("category")}>
            <FontAwesomeIcon icon={faBars} className={cx('icon')} />
            <span>Thể loại</span>
          </div>
          <div className={cx("action-below")}>
            <div class={cx("action-below-nav")}>Diễn đàn</div>
            <div class={cx("action-below-nav")}>Bảng xếp hạng</div>
            <div class={cx("action-below-nav")}>Bộ lọc</div>
            <div class={cx("action-below-nav")}>Reviews</div>
            <div class={cx("action-below-nav")}>Cửa hàng</div>
          </div>

          <button className={cx("download-app")}>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className={cx("icon")}
            />
            <span>Tải app</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
