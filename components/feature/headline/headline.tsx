import styles from '@/components/feature/headline/headline.module.scss'

// propsの型定義
interface Props {
  content: string,
  black?: boolean,
  borderNone?: boolean,
  center?: boolean
}

export function Headline(props: Props) {
  return (
    <>
      <h2 className={`${styles.headline}
         ${ props.black ? styles['--black'] : styles['']}
         ${ props.center ? styles['--center'] : styles['']}
         ${ props.borderNone ? styles['--border-none'] : styles['']}`}
      >
        { props.content }
      </h2>
    </>
  );
}