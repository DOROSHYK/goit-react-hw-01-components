import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import f from './FriendList.module.css';

function FriendListFragment({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span>{isOnline}</span>
      <img className={f.avatar} src={avatar} alt={name} width="48" />
      <p className={f.name}>{name}</p>
    </Fragment>
  );
}

FriendListFragment.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendListFragment;
