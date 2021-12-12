import { Link } from 'react-router-dom';
import CartIcon from '../pages/cart/CartIcon';
import styles from './Nav.module.css';

const NavBarmenu = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/category">
            categories
          </Link>
          <CartIcon />
        </nav>
      </header>
    </div>
  );
};

export default NavBarmenu;
