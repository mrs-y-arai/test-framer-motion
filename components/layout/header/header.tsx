import { useState, useRef, useEffect } from "react"
import { motion, useCycle } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/container/container'
import { NavMenu } from '@/components/feature/nav-menu/nav-menu'
import { Btn } from '@/components/feature/btn/btn'
import { HamburgerBtn } from '@/components/feature/hamburger-btn/hamburger-btn'
import styles from '@/components/layout/header/Header.module.scss'

// propsの型定義
interface Props {
  white: boolean,
  hide: boolean
}

export function Header(props: Props) {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <header aria-hidden={props.hide} aria-expanded={isOpen} className={`${styles.header}`} >
        <Container>
          <div className={styles.header__inner}>
            <HamburgerBtn open={isOpen} clickEvent={() => toggleOpen()} />
            <NavMenu open={isOpen} />
            <Link href="/" className={styles.logo}>
              <Image
              src={ props.white ? `/vercel.svg` : `/vercel.svg` }
              alt="ロゴ画像"
              width={40}
              height={10}
              />
            </Link>
            <Btn white={props.white} large={true} content="CONTACT" url="/contact" />
          </div>
        </Container>
      </header>
    </>
  );
}