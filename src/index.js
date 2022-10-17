import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from './components/Zad1Profile/user.json';
import data from './components/Zad2Statistic/data.json';
import friends from './components/Zad3Friends/friends.json';
import transactions from './components/Zad4Transaction/transactions.json';


import { Profile } from './components/Zad1Profile/Profile';
import { Statistics } from './components/Zad2Statistic/Statistic';
import { FriendList } from './components/Zad3Friends/FriendsList';
import { TransactionHistory } from './components/Zad4Transaction/Transaction';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);

