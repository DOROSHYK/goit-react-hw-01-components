import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

function FriendListFragment({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Fragment>
  );
}

FriendListFragment.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendListFragment;
