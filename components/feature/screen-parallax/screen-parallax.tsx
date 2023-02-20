import { useRef } from 'react'
import { motion, useScroll, MotionValue, useTransform, useSpring } from 'framer-motion'
import styles from '@/components/feature/screen-parallax/screen-parallax.module.scss'

interface Props {
  content: string,
}

function SetParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function ScreenParallax({ id }: { id: number }) {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = SetParallax(scrollYProgress, 300)

  return (
    <>
      <section className={styles['parallax-wrap']}>
        <div className={styles['parallax-wrap__screen']} ref={ref}></div>
        <motion.h2 style={{ y }} className={styles['parallax-wrap__headline']} >
          {`#00${id}`}
        </motion.h2>
      </section>
    </>
  );
}