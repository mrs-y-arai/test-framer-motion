import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { useEffect } from 'react'
import styles from '@/components/feature/slide-bg/slide-bg.module.scss'

// propsの型定義
interface Props {
  children: any,
}

export function SlideBg(props: Props) {
  const control = useAnimation()
  const [ref, isInView] = useInView()
  const [childRef, isChildInView] = useInView({triggerOnce: true})

  // Variants定義
  const parentVariants = {
    visible: {
      x: '0%',
      transition: {
        duration: 1,
        type: "spring",
      },
    },
    hidden: {
      x: '-100%',
    },
  }

  const childVariants = {
    visible: {
      x: '105%',
      transition: {
        duration: 1,
        delay: 0.7,
        type: "spring",
      },
    },
    hidden: {
      x: '0%',
    },
  }

  // 可視域に入ったら、アニメーションを発火させる
  useEffect(()=>{
    if(isInView){
      control.start("visible");
    }else{
      control.start("hidden");
    }
  },[isInView])

  useEffect(()=>{
    if(isChildInView){
      control.start("visible");
    }else{
      control.start("hidden");
    }
  },[isChildInView])

  return (
    <motion.div
      className={`${styles['animate-block__blue-bg-wrap']}`}
      ref = {ref}
      variants = {parentVariants}
      initial = "hidden"
      animate = {control} //animateはcontrolを指定。これでcontrolの状態にアニメーションしていく
    >
      <motion.div
        className={`${styles['animate-block__blue-bg']}`}
        ref = {childRef}
        variants = {childVariants}
        initial = "hidden"
        animate = {control}
      >
      </motion.div>
      { props.children }      
    </motion.div>
  )
}