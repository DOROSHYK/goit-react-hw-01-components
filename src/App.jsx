import React, { Fragment } from 'react';

import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

function App() {
  return (
    <Fragment>
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;
