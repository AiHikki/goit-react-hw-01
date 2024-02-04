import styles from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="80" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(isOnline ? styles.isOnline : styles.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
