import PropTypes from 'prop-types';
import f from './Statistics.module.css';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

function Statistics({ title, stats }) {
  return (
    <section className={f.statistics}>
      {title && <h2 className={f.title}>{title}</h2>}

      <ul className={f.statlist}>
        {stats.map(stat => (
          <li
            className={f.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={f.label}>{stat.label}</span>

            <span className={f.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
