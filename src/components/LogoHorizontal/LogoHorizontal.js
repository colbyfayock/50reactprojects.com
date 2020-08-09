import styles from './LogoHorizontal.module.scss';

import LogoReact from '../LogoReact';

const LogoHorizontal = () => {
  return (
    <span className={styles.container}>
      <LogoReact />
      <span className={styles.body}>
        <strong>50 Projects</strong>
        <span>For React &amp; The Static Web</span>
      </span>
    </span>
  )
}

export default LogoHorizontal;