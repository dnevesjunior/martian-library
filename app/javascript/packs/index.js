import React from 'react';
import { render } from 'react-dom';

import ApolloProvider from '../providers/ApolloProvider';
import Library from '../components/Library/Library';

render(
  <ApolloProvider>
    <Library />
  </ApolloProvider>,
  document.querySelector('#root')
);
