# Notes:

> mutations are responsible for changing (or mutating) data

> a GraphQL server must guarantee that mutations are executed consecutively, while queries can be executed in parallel.

- We start with defining a mutation with an operation name SignInUser and a variable named $email (all variables in GraphQL start with $).

- We have a list of mutations we want to execute inside the curly braces (this list is called a selection set)—in our case we only have one field called signIn.
    
- As with queries, we can have nested selection sets inside the root one (i.e., select specific fields from the mutation return value).

- graphql-tag library is used to execute queries and keep them near the component in the same file
  - These operations (`gql query... [from graphql-tag]`) can be kept in a separate file, which is useful for larger applications and provides a clearer project structure.
  - Webpacker needs to be configured to read .gql files

- To sum up, in order to add a new mutation you need to complete the following steps:

  1. Add a class implementing the mutation logic, which includes:
  2. the input type definition (arguments);
  3. the return type definition;
  4. the #resolve method.
  5. Add a new entry to MutationType.

### Dealing with cache

- There are two options to do it:

  1. re-fetch the me query (we can use refetchQueries property on the Mutation component) when the mutation is completed—this can be useful, but we can do it better
  2. Wait for the mutation to be completed and update the cache manually. apollo-cache-inmemory provides writeQuery function for that. The Mutation component from the react-apollo library has a special property called update. It accepts cache as the first argument and the mutation result as the second. We want to manually add a new cache entry using a writeQuery method. It’s like saying “Hey, Apollo! Here is some data, pretend that you received it from the server.”
