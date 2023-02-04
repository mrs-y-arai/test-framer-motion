import { motion } from 'framer-motion';
import { useRef } from 'react'
import { HeadTag } from '@/components/config/head'
import { Header } from '@/components/layout/header/header'
import { Main } from '@/components/layout/main/main'
import { Container } from '@/components/layout/container/container'
import { Spacer } from '@/components/config/spacer'
import { Service } from '@/components/section/top/service/service'
import Image from 'next/image'
import styles from '@/styles/pages/index.module.scss'

export default function Home() {
  const scrollRef = useRef(null)

  return (
    <>
      <HeadTag title="TOP | TEST FRAMER MOTION" description='TEST FRAMER MOTION' />
      <Header white={false} />
      <Main>
        <div className={styles.fv} ref={scrollRef}>
          <motion.div
            className={styles.box}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],              
            }}
          />
          <motion.div
            className={styles.box}
            animate={{ x: 50 }}
            transition={{ type: "spring", damping: 5 }}
          />
          <motion.div
            className={styles.box}
            whileHover={{ scale: 1.5, }}
            transition={{ type: "spring", damping: 5 }}
          />
          <motion.div
            className={styles.box}
            initial={{ x: -50 }}
            whileInView={{ x: 100 }}
            transition={{ type: "spring", damping: 5 }}
          />
          <motion.div
            className={styles.box}
            initial={{ x: 50 }}
            whileInView={{ x: -100 }}
            transition={{ type: "spring", damping: 5 }}
          />
        </div>
        <Service />
      </Main>
    </>
  )
}