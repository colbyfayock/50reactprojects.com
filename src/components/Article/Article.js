import ClassName from 'models/classname';

import styles from './Article.module.scss';

const Article = ({ children, className, withSidebar = true }) => {
  const articleClassName = new ClassName(styles.article);

  articleClassName.addIf(className, className);

  return (
    <article className={articleClassName.toString()} data-with-sidebar={withSidebar}>
      { children }
    </article>
  )
}

export default Article;