import ClassName from 'models/classname';
import * as gtag from 'lib/gtag';

import Button from 'components/Button';

import styles from './FormEbook.module.scss';

const FormEbook = ({ children, className, ...rest }) => {
  const formClassName = new ClassName(styles.form);

  formClassName.addIf(className, className);

  function handleOnFormSubmit(e = {}) {
    const { currentTarget } = e;

    e.preventDefault();

    gtag.event({
      category: 'resource',
      action: 'download',
      label: currentTarget.id
    });

    currentTarget.submit();
  }

  return (
    <form id="hero" className={formClassName.toString()} action="https://app.convertkit.com/forms/1588410/subscriptions" method="post" onSubmit={handleOnFormSubmit} {...rest}>
      { children }
      <input type="checkbox" name="tags[]" value="1749930" checked readOnly style={{ display: 'none' }} />
      <input type="checkbox" name="tags[]" value="1787072" checked readOnly style={{ display: 'none' }} />
      <label className="sronly" htmlFor="email">Email Address</label>
      <section>
        <input type="email" name="email_address" placeholder="Email Address" required />
        <Button>Get It Free</Button>
      </section>
      <p className={styles.version}>
        v1.0
      </p>
    </form>
  )
}

export default FormEbook;