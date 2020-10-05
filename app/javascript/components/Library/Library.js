import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const LibraryQuery = gql`
  {
    items {
      id
      title
      user {
        email
      }
    }
  }
`;

const renderItems = (items) => (
  items.map(({ title, id, user }) => (
    <div key={id}>
      <b>{title}</b> {user ? `added by ${user.email}` : null}
    </div>
  ))
)

export default () => (
  <Query query={LibraryQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? 'loading...'
          : renderItems(data.items)
        }
      </div>
    )}
  </Query>
);
