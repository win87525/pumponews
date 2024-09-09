import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Icon from "./headerIcon";
import HeaderList from "./headerList";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerIndex}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image src="/pumpologo.png" alt="logo" width={148} height={60} />
          </Link>
        </div>
        <div className={styles.headerRight}>
          <Link href="/">訂閱電子報</Link>
          <div className={styles.headerRightIcon}>
            <Icon />
          </div>
          <Link href="/" className="btn">
            立即試玩
          </Link>
        </div>
      </div>

      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <HeaderList />
        </ul>
      </nav>
    </header>
  );
}
