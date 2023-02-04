import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react'
import { HeadTag } from '@/components/config/head'
import { Header } from '@/components/layout/header/header'
import { Main } from '@/components/layout/main/main'
import { Container } from '@/components/layout/container/container'
import { Spacer } from '@/components/config/spacer'
import { Headline } from '@/components/feature/headline/headline' 
import { Service } from '@/components/section/top/service/service'
import Image from 'next/image'
import styles from '@/styles/pages/index.module.scss'

export default function Home() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()

  return (
    <>
      <HeadTag title="TOP | TEST FRAMER MOTION" description='TEST FRAMER MOTION' />
      <Header white={false} />
      <Main>

        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "30px",
            transformOrigin: "0%",
            backgroundColor: "white",
            scaleX: scrollYProgress
          }}
        />

        <div className={styles['animate-wrap']} ref={scrollRef}>      
          <div className={`${styles['animate-block']} ${styles['--center']}`}>
            <Headline content='時間差で表示' center borderNone />
            <Spacer pcSize={20} />
            <motion.div
              className={styles.circle}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],              
              }}
            />
          </div>

          <div className={`${styles['animate-block']} ${styles['--center']}`}>
            <Headline content='左からずれてきて、反発する' center borderNone />
            <Spacer pcSize={20} />
            <motion.div
              className={styles.circle}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 8 }}
            />
          </div>

          <div className={`${styles['animate-block']} ${styles['--center']}`}>
            <Headline content='マウスオーバーで大きくなる かつ 反発する' center borderNone />
            <Spacer pcSize={20} />
            <motion.div
              className={styles.circle}
              whileHover={{ scale: 1.5, }}
              transition={{ type: "spring", damping: 5 }}
            />
          </div>

          <div className={`${styles['animate-block']} ${styles['--center']}`}>
            <Headline content='表示域に入ると、左右から真ん中に入ってくる' center borderNone />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
            />
          </div>

          <div className={`${styles['animate-block']} ${styles['--black']}`}>
            <Headline content='左右から真ん中に入ってくる2' />
            <motion.div
              initial={{ x: -500, }}
              whileInView={{ x: 0, }}
              transition={{
                duration: 0.5,
              }}
            >
              <h2 className={`${styles['animate-block__catch']}`}>Framer</h2>
            </motion.div>

            <Spacer pcSize={30} />
            
            <Headline content='青の枠が出て、その後文字が出る' />

            <Spacer pcSize={10} />

            <motion.div
              className={`${styles['animate-block__blue-bg-wrap']}`}
              initial={{ x: '-20vw', }}
              whileInView={{ x: '0vw', }}
              transition={{
                duration: 0.5,
              }}
            >
              <motion.div
                className={`${styles['animate-block__blue-bg']}`}
                initial={{ x: '0vw', opacity: 1}}
                whileInView={{ x: '31vw', opacity: 0}}
                transition={{
                  duration: 0.5,
                  delay: 0.6
                }}
              >
              </motion.div>
              <p className={`${styles['animate-block__text']}`}>お気軽にご相談ください。</p>
            </motion.div>

            <Spacer pcSize={10} />
            
            <motion.div
              className={`${styles['animate-block__blue-bg-wrap']}`}
              initial={{ x: '-20vw', }}
              whileInView={{ x: '0vw', }}
              transition={{
                duration: 0.5,
              }}
            >
              <motion.div
                className={`${styles['animate-block__blue-bg']}`}
                initial={{ x: '0vw', opacity: 1}}
                whileInView={{ x: '31vw', opacity: 0}}
                transition={{
                  duration: 0.5,
                  delay: 0.6
                }}
              >
              </motion.div>
              <p className={`${styles['animate-block__text']}`}>お気軽にご相談ください。お気軽に</p>
            </motion.div>

          </div>          
        </div>
      </Main>
    </>
  )
}