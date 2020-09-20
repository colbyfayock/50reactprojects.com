import styles from './LoginRequired.module.scss';

const LoginRequired = () => {
  const isAuthorization = false;

  if ( !isAuthorization ) {
    return (
      <p className={styles.loginRequired}>
        More levels including the ability to save your progress coming soon!
      </p>
    );
  }

  return <>{ children }</>
}

export default LoginRequired;