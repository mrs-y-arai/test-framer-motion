import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/container/container'
import { NavMenu } from '@/components/feature/nav-menu/nav-menu'
import { Btn } from '@/components/feature/btn/btn'
import styles from '@/components/layout/header/header.module.scss'

// propsの型定義
interface Props {
  white: boolean,
}

export function Header(props: Props) {
  return (
    <>
      <header className={`container ${styles.header}`} >
        <Container>
          <div className={styles.header__inner}>
            <NavMenu white={props.white} />
            <Link href="/" className={styles.logo}>
              <Image
              src={ props.white ? `/next.svg` : `/next.svg` }
              alt="ロゴ画像"
              width={180}
              height={37}
              />
            </Link>
            <Btn white={props.white} large={true} content="CONTACT" url="/contact" />
          </div>
        </Container>
      </header>
    </>
  );
}