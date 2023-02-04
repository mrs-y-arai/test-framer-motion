import Link from 'next/link'
import styles from '@/components/feature/btn/btn.module.scss'

// propsの型定義
interface Props {
  url: string,
  content: string,
  white: boolean,
  large: boolean,
}

export function Btn(props: Props) {
  return (
    <>
      <Link href={props.url}
         className={`${styles.btn}
         ${ props.white ? styles['--white'] : styles['']}
         ${ props.large ? styles['--large'] : styles['']}`}
         >
        <span className={styles.btn__text}>
          {props.content}
        </span>
      </Link>
    </>
  );
}