import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
/* import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri';
import { HiPencilSquare } from 'react-icons/hi2';
import auth from '../../lib/auth';
import Logo from '../../logo/Logo'; */

const Header = () => {
 /*  const isAuthenticated = auth.isSignedIn();
  const fetcher = useFetcher(); */
  return (
    <header className={styles.header}>
      <div className={styles['logo-wrapper']}>
        <Link to='/' className={styles['logo-link']}>
          {/*   <Logo /> */}
          <p>LIA presentation</p>
        </Link>
      </div>
      <Link to='/'>
        <button className={styles.btn}>Home</button>
      </Link>
      <Link to='/about'>
        <button className={styles.btn}>About</button>
      </Link>
      <Link to='/contact'>
        <button className={styles.btn}>Contact</button>
      </Link>
      {/*
      <div>
       {isAuthenticated ? (
          <>
            <Link to='create-post'>
              <button className={styles.btn}>
                <HiPencilSquare />
              </button>
            </Link>
            <fetcher.Form method='post' action='/sign-out'>
              <button type='submit' className={styles.btn}>
                <RiLogoutCircleLine />
              </button>
            </fetcher.Form>
          </>
        ) : (
          <>
            <Link to='./sign-in'>
              <button className={styles.btn}>
                <RiLoginCircleLine />
              </button>
            </Link>
            <Link to='./sign-up'>
              <button className={styles.btn}>Sign up</button>
            </Link>
          </>
        )}
      </div> */}
    </header>
  );
};

export default Header;
