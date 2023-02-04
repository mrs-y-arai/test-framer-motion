import styles from '@/components/layout/main/main.module.scss'

// propsの型定義
interface Props {
  children: any
}

export function Main(props: Props) {
  return (
    <>
      <div className={styles.main}>
        {props.children}
      </div>
    </>
  );
}