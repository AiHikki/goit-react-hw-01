import { FriendListItem } from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, id, name, isOnline }) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />;
      })}
    </ul>
  );
};
