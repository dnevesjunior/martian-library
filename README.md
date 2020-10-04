Martian Library from: https://evilmartians.com/chronicles/graphql-on-rails-1-from-zero-to-the-first-query

Notes will stay here

Steps:

- Remove unnecessary generators

- Prepare the data model

- Seed pre-generated data

- Setup database

- Setup GraphQL

- First GraphQL Type generation and docs

Notes:

- GraphQL is transport-agnostic, but most implementations, including ruby-graphql, use HTTP POST requests. Requests are sent to GraphqlController#execute.
  - #execute parameters
    - `query` and `variables` represent a query string and arguments sent by a client respectively;
    - `context` is an arbitrary hash, which will be available during the query execution everywhere;
    - `operation_name` picks a named operation from the incoming request to execute (could be empty)


Troubleshoot:

- Sprockets::Rails::Helper::AssetNotPrecompiled in GraphiQL::Rails::Editors#show

  - Cause is graphiql css and js not being precompile. Add lines from commit on app/assets/config/manifest.js