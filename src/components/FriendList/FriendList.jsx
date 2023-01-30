import css from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <li className={css.item}>
            <span className={friend.isOnline ? css.online : css.offline}></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
