Notes:

> mutations are responsible for changing (or mutating) data

> a GraphQL server must guarantee that mutations are executed consecutively, while queries can be executed in parallel.

- We start with defining a mutation with an operation name SignInUser and a variable named $email (all variables in GraphQL start with $).

- We have a list of mutations we want to execute inside the curly braces (this list is called a selection set)—in our case we only have one field called signIn.
    
- As with queries, we can have nested selection sets inside the root one (i.e., select specific fields from the mutation return value).
