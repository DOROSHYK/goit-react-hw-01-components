import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import f from './Transaction.module.css';

const TransactionTableRow = ({ type, amount, currency }) => {
  return (
    // <tr key={id}>
    <Fragment>
      <td className={f.transactionBorder}>{type}</td>
      <td className={f.transactionBorder}>{amount}</td>
      <td className={f.transactionBorder}>{currency}</td>
    </Fragment>
  );
};

TransactionTableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionTableRow;
