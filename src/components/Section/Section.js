import styles from './Section.module.scss';

const Section = ({ children, backgroundColor, spacing, ...rest }) => {
  return (
    <div className={styles.section} data-background-color={backgroundColor} data-spacing={spacing} {...rest}>
      { children }
    </div>
  )
}

export default Section;