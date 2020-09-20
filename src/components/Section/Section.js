import ClassName from 'models/classname';

import styles from './Section.module.scss';

const Section = ({ children, className, backgroundColor, spacing, ...rest }) => {
  const sectionClassName = new ClassName(styles.section);

  sectionClassName.addIf(className, className);

  return (
    <div className={sectionClassName.toString()} data-background-color={backgroundColor} data-spacing={spacing} {...rest}>
      { children }
    </div>
  )
}

export default Section;