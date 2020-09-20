import ClassName from 'models/classname';

import styles from './Article.module.scss';

const Article = ({ children, className }) => {
  const articleClassName = new ClassName(styles.article);

  articleClassName.addIf(className, className);

  return (
    <article className={articleClassName.toString()}>
      { children }
    </article>
  )
}

export default Article;