import ClassName from 'models/classname';

import styles from './Container.module.scss';

const Container = ({ children, className, display }) => {
  const containerClassName = new ClassName(styles.container);

  containerClassName.addIf(className, className);

  return (
    <div className={containerClassName.toString()} data-display={display}>
      { children }
    </div>
  )
}

export default Container;