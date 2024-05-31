import Footer from "~/components/Layout/components/Footer";
import HomeHeader from "./HomeHeader";

import styles from './HomeLayout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function HomeLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <HomeHeader />
      <div className={cx('container')}>
      <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
