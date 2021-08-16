import PropTypes from 'prop-types';
import f from './Profile.module.css';
function Profile({ name, avatar, tag, location, stats }) {
  return (
    <div className={f.profile}>
      <div className={f.description}>
        <img className={f.avatar} src={avatar} alt={name} width="100" />
        <p className={f.name}>{name}</p>
        <p className={f.tag}>@{tag}</p>
        <p className={f.location}>{location}</p>
      </div>

      <ul className={f.stats}>
        <li className={f.items}>
          <span className={f.label}>Followers</span>
          <span className={f.quantity}>{stats.followers}</span>
        </li>
        <li className={f.items}>
          <span className={f.label}>Views</span>
          <span className={f.quantity}>{stats.views}</span>
        </li>
        <li className={f.items}>
          <span className={f.label}>Likes</span>
          <span className={f.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  location: 'hidden by user',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
