import PropTypes from 'prop-types';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(stat => (
          <li key={stat.id} style={{ backgroundColor: randomColor() }}>
            <span>{stat.label}</span>

            <span>{stat.percentage}%</span>
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
