import ClassName from 'models/classname';

import styles from './Aside.module.scss';

const Aside = ({ children, className }) => {
  const asideClassName = new ClassName(styles.aside);

  asideClassName.addIf(className, className);

  return (
    <aside className={asideClassName.toString()}>
      { children }
    </aside>
  )
}

export default Aside;