import styles from '@/components/layout/container/container.module.scss'

// propsの型定義
interface Props {
  children: any
}

export function Container(props: Props) {
  return (
    <>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  );
}