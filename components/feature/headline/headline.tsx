import styles from '@/components/feature/headline/headline.module.scss'

// propsの型定義
interface Props {
  content: string,
  black: boolean,
  border: boolean,
}

export function Headline(props: Props) {
  return (
    <>
      <h2 className={`${styles.headline}
         ${ props.black ? styles['--black'] : styles['']}
         ${ props.border ? styles[''] : styles['--border-none']}`}
      >
        { props.content }
      </h2>
    </>
  );
}