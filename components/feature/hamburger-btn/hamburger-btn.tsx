import { MouseEventHandler, useState, useRef, useEffect } from "react";
import styles from '@/components/feature/hamburger-btn/hamburger-btn.module.scss'

// propsの型定義
// マウスイベント系の型
interface Props {
  open: boolean,
  clickEvent: MouseEventHandler,
}

export function HamburgerBtn(props: Props) {
  const hamburgerBtnText = useRef<HTMLParagraphElement>(null)

  // openが変化したら、テキストを変更する
  // この場合、テキストコンテントは、中身も変わっている。
  useEffect(() => {
    if( props.open ) {
      hamburgerBtnText.current!.textContent = "CLOSE"
    }else {
      hamburgerBtnText.current!.textContent = "OPEN"
    }
    console.log(hamburgerBtnText.current!.textContent)

    // 切り替わる直前の状態が表示される
    return () => {
      if( hamburgerBtnText.current!.textContent !== null ) {
        return
      }else{
        console.log(hamburgerBtnText.current!.textContent)
      }
    }
  }, [props.open])

  return (
    <>
      <button className={styles['hamburger-btn']}
        onClick={props.clickEvent}
        aria-expanded={props.open}
      >
        <span className={styles['hamburger-btn__line']}></span>
        <span className={styles['hamburger-btn__line']}></span>
        <p className={styles['hamburger-btn__text']} ref={hamburgerBtnText}>OPEN</p>
      </button>
    </>
  );
}