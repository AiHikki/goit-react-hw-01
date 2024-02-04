import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/profile"> Profile </Link>
      <Link to="/friend-list"> FriendList </Link>
      <Link to="/transaction-history"> TransactionHistory </Link>
    </nav>
  );
};
