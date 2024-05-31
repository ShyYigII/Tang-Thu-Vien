import Footer from "~/components/Layout/components/Footer";
import Header from "~/components/Layout/components/Header";

import styles from "./CategoryLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CategoryLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default CategoryLayout;
