import PropTypes from 'prop-types';
import FriendListFragment from './FriendListFragment';
import f from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={f.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListFragment
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
