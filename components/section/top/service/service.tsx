import { Container } from '@/components/layout/container/container'
import { Headline } from '@/components/feature/headline/headline' 
import { Spacer } from '@/components/config/spacer'
import styles from '@/components/section/top/service/service.module.scss'

export function Service() {
  return (
    <>
      <section className={styles.service}>
        <Container>
          <Headline content='FRAMER MOTION' black={false} border={true} />
          <Spacer pcSize={30} />
          <p className={styles.service__catch}>framer</p>
          <p className={styles.service__catch}>motion</p>
        </Container>
      </section>
    </>
  );
}