import PropTypes from 'prop-types';

import f from './FriendList.module.css';

function FriendListFragment({ id, avatar, name, isOnline }) {
  return (
    <li className={f.item}>
      <span>{isOnline}</span>
      <img className={f.avatar} src={avatar} alt={name} width="48" />
      <p className={f.name}>{name}</p>
    </li>
  );
}

FriendListFragment.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendListFragment;
