import Link from 'next/link'
import styles from '@/components/feature/nav-menu/nav-menu.module.scss'

// propsの型定義
interface Props {
  white: boolean,
}

export function NavMenu(props: Props){
  return (
    <>
      <nav className={`${styles.nav} ${ props.white ? styles['--white'] : styles['--black']}`}>
        <ul className={styles.nav__items}>
          <li className={styles.nav__item}>
            <Link href="/" className={`news__link ${styles.nav__link}`}>
              <span className={styles['nav__text']}>VISION</span>
              <span className={styles['nav__text--hover']}>VISION</span>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/" className={`news__link ${styles.nav__link}`}>
              <span className={styles['nav__text']}>SERVICE</span>
              <span className={styles['nav__text--hover']}>SERVICE</span>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/news" className={`news__link ${styles.nav__link}`}>
              <span className={styles['nav__text']}>NEWS</span>
              <span className={styles['nav__text--hover']}>NEWS</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}