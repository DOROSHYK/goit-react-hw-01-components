import React, { Fragment } from 'react';

import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import Profile from './components/Profile/Profile';
import user from './user.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
