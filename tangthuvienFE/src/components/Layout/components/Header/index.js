import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBookJournalWhills,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  const [showMoreCategory, setShowMoreCategory] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("head-above")}>
        <div className={cx("inner")}>
          <div className={cx("nav-list")}>
            <div className={cx("action-nav-first") }>Trang chủ</div>
            <div className={cx("action-nav")}>Tiên hiệp</div>
            <div className={cx("action-nav")}>Huyền huyễn</div>
            <div className={cx("action-nav")}>Đô Thị</div>
            <div className={cx("action-nav")}>Khoa huyễn</div>
            <div className={cx("action-nav")}>Kỳ huyễn</div>
            <div className={cx("action-nav")}>Võ hiệp</div>
            <div className={cx("action-nav")}>Lịch sử</div>
            <Tippy
              visible={showMoreCategory}
              interactive	
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  <div className={cx("action-nav", "more-nav")}>Đồng nhân</div>
                  <div className={cx("action-nav", "more-nav")}>Quân sự</div>
                  <div className={cx("action-nav", "more-nav")}>Du hí</div>
                  <div className={cx("action-nav", "more-nav")}>Cạnh kỹ</div>
                  <div className={cx("action-nav", "more-nav")}>Linh dị</div>
                </div>
              )}
              onClickOutside={() => setShowMoreCategory(false)}
            >
              <div
                className={cx("action-nav")}
                onClick={() => setShowMoreCategory((prev) => !prev)}
              >
                <span>Khác</span> <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </Tippy>
          </div>
          <div className={cx("search-book")}>
            <input placeholder="Tìm kiếm..." spellCheck="false" />

            <button className={cx("search-book-btn")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={cx("account")}>
            <button className={cx("account-btn")}>
              {" "}
              <FontAwesomeIcon
                icon={faBookJournalWhills}
                className={cx("icon")}
              />{" "}
              <span>account</span>{" "}
            </button>
          </div>
          <button className={cx("logout-btn")}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
          </button>
        </div>
      </div>
      <div className={cx("head-below")}>
        <div className={cx("inner")}>
          <img src={images.logo_category} alt="ttv" className={cx("logo")} />

          <div className={cx("search")}>
            <input
              placeholder="Nhập tên truyện hoặc tác giả"
              spellCheck="false"
            />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
