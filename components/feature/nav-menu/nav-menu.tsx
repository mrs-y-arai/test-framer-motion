import { useState, useRef, useEffect } from "react"
import { motion, useCycle } from "framer-motion"
import Link from 'next/link'
import styles from '@/components/feature/nav-menu/nav-menu.module.scss'

// propsの型定義
interface Props {
  white?: boolean,
  open: boolean
}

const navVariants = {
  open: {
    x: '0vw',
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "Tween",
    },
  },
  closed: {
    x: '100vw',
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "Tween",
    },
  }
}

const itemVariants = {
  open: {
    x: '0%',
    transition: {
      delay: 1,
      duration: 0.5,
      type: "Tween",
    },
  },
  closed: {
    x: '-150%',
    transition: {
      duration: 0.3,
      type: "Tween",  
    },
  }
}

export function NavMenu(props: Props){
  const [navState, setState] = useCycle("closed", "open")

  // openが変化したら、navStateも切り替える
  useEffect(() => {
    setState()
    console.log(navState)
  }, [props.open])

  return (
    <>
      <motion.nav className={`${styles.nav}
        ${ props.white ? styles['--white'] : styles['--black']}`}
        variants={navVariants}
        initial = "closed"
        animate = {navState}
      >
        <ul className={styles.nav__items}>
          <motion.li className={styles.nav__item}
            variants={itemVariants}            
          >
            <Link href="/" className={`nav__link ${styles.nav__link}`}>
              <span className={styles['nav__text']}>VISION</span>
              <span className={styles['nav__text--hover']}>VISION</span>
            </Link>
          </motion.li>
          <motion.li className={styles.nav__item}
            variants={itemVariants}            
          >
            <Link href="/" className={`nav__link ${styles.nav__link}`}>
              <span className={styles['nav__text']}>SERVICE</span>
              <span className={styles['nav__text--hover']}>SERVICE</span>
            </Link>
          </motion.li>
          <motion.li className={styles.nav__item}
          variants={itemVariants}
          initial = "closed"
          animate = {navState}
          >
            <Link href="/news" className={`nav__link ${styles.nav__link}`}>
              <span className={styles['nav__text']}>NEWS</span>
              <span className={styles['nav__text--hover']}>NEWS</span>
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
}