import React from 'react';
import { render } from 'react-dom';

import ApolloProvider from '../providers/ApolloProvider';
import UserInfo from '../components/UserInfo/UserInfo';
import Library from '../components/Library/Library';

render(
  <ApolloProvider>
    <UserInfo />
    <Library />
  </ApolloProvider>,
  document.querySelector('#root')
);
