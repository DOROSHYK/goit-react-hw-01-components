import PropTypes from 'prop-types';

import React, { Fragment } from 'react';
const TransactionTableRow = ({ type, amount, currency }) => {
  return (
    // <tr key={id}>
    <Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Fragment>
  );
};

TransactionTableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionTableRow;
