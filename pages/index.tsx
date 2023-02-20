import { motion, useScroll, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { HeadTag } from '@/components/config/head'
import { Header } from '@/components/layout/header/header'
import { Main } from '@/components/layout/main/main'
import { Spacer } from '@/components/config/spacer'
import { Headline } from '@/components/feature/headline/headline' 
import { SlideBg } from '@/components/feature/slide-bg/slide-bg' 
import { ScreenParallax } from '@/components/feature/screen-parallax/screen-parallax' 
import styles from '@/styles/pages/index.module.scss'

export default function Home() {
  const scrollRef = useRef(null)

  // スクロール量と合わせてバーの長さが変化する。scrollScreenRefを軸に作動
  const scrollScreenRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: scrollScreenRef,
  })  

  return (
    <>
      <HeadTag title="TOP | TEST FRAMER MOTION" description='TEST FRAMER MOTION' />
      <Header hide={false} white={false} />
      <Main>

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
              whileHover={{ scale: 1.2, }}
              whileTap={{ scale: 0.9, }}
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

          <div className={`${styles['animate-block']} ${styles['--grey']}`}>
            <Headline content='左右から真ん中に入る 1回のみ' />
            <div className={`${styles['animate-block__catch-block']}`}>
              <motion.h2 className={`${styles['animate-block__catch']}`}
                initial={{ x: '-100%', }}
                whileInView={{ x: '0%', }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{ once: true }}
              >
                Framer
              </motion.h2>
            </div>            

            <Spacer pcSize={30} />
            
            <Headline content='青の枠が出て、その後文字が出る' />

            <Spacer pcSize={10} />
            
            <SlideBg>
              <p className={`${styles['animate-block__text']}`}>お気軽にご相談ください。</p>
            </SlideBg>

            <Spacer pcSize={30} />

            <Spacer pcSize={10} />
            <div className={`${styles['animate-block__catch-block']}`}>
              <motion.h2 className={`${styles['animate-block__catch']}`}
                initial={{ x: '-100%', }}
                whileInView={{ x: '0%', }}
                transition={{
                  duration: 1.2,
                }}
              >
                Motion
              </motion.h2>
            </div>

            <Spacer pcSize={30} />

            <SlideBg>
              <h2 className={`${styles['animate-block__catch']}`}>Animation</h2>
            </SlideBg>
            
          </div>

          <Spacer pcSize={100} />

          <div ref={scrollScreenRef} className={`${styles['animate-block']} ${styles['--grey']}`} >
            {/* スクロール量と合わせてバーの長さが変化する。 */}
            <motion.div
              className={`${styles['animate-block__bar']}`}
              style={{
                scaleX: scrollYProgress
              }}
            />

            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: -100, rotate: 10 }}
              whileInView={{ x: 0, rotate: 10 }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
            <motion.div
              className={styles.rect}
              initial={{ x: 100, rotate: -10 }}
              whileInView={{ x: 0, rotate: -10  }}
              transition={{ type: "spring", }}
              viewport={{ root: scrollScreenRef }}
            />
          </div> 

          <Spacer pcSize={100} />
          
          <div className={styles['parallax']}>
            {[1, 2, 3, 4, 5].map((index) => (
              <ScreenParallax id={index} />
            ))}
          </div>

        </div>
      </Main>
    </>
  )
}