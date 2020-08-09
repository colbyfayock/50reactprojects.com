import styles from './Hero.module.scss';

const Hero = ({ children }) => {
  return (
    <div className={styles.hero}>
      { children }
    </div>
  )
}

export default Hero;