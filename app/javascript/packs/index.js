import React from 'react';
import { render } from 'react-dom';

import ApolloProvider from '../providers/ApolloProvider';
import UserInfo from '../components/UserInfo/UserInfo';
import AddItemForm from '../components/AddItemForm/AddItemForm';
import Library from '../components/Library/Library';

render(
  <ApolloProvider>
    <UserInfo />
    <AddItemForm />
    <Library />
  </ApolloProvider>,
  document.querySelector('#root')
);
