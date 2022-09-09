import { useSession } from "next-auth/react"

import styles from './LoginRequired.module.scss';

const LoginRequired = ({ children }) => {
  const { data: session } = useSession()

  const isAuthorized = !!session?.user;

  if ( !isAuthorized ) {
    return (
      <p className={styles.loginRequired}>
        More levels including the ability to save your progress coming soon!
      </p>
    );
  }

  return <>{ children }</>
}

export default LoginRequired;