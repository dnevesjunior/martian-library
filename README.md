# Martian Library from: https://evilmartians.com/chronicles/graphql-on-rails-1-from-zero-to-the-first-query

## Notes will stay here

### Steps:

- Remove unnecessary generators

- Prepare the data model

- Seed pre-generated data

- Setup database

- Setup GraphQL

- First GraphQL Type generation and docs

- First GraphQL Type generation with relationship

- Setup Apollo

- Setup Apollo Provider - [provider pattern](https://reactjs.org/docs/context.html#contextprovider)

- Show Provider on Library component

- Write initial specs

### Notes:

> GraphQL is transport-agnostic, but most implementations, including ruby-graphql, use HTTP POST requests. Requests are sent to GraphqlController#execute.
  - #execute parameters
    - `query` and `variables` represent a query string and arguments sent by a client respectively;
    - `context` is an arbitrary hash, which will be available during the query execution everywhere;
    - `operation_name` picks a named operation from the incoming request to execute (could be empty)

    - This is connected to the backend through the http link configured on app/javascript/utils/apollo.js

### Tips:

- If you’re using Google Chrome, mind installing the Apollo extension. (Apollo Client Developer Tools on Firefox Browser Add-Ons)


### Troubleshoot:

- Sprockets::Rails::Helper::AssetNotPrecompiled in GraphiQL::Rails::Editors#show

  - Cause is graphiql css and js not being precompile. Add lines from commit on app/assets/config/manifest.js

- "Field 'full_name' doesn't exist on type 'User'"
  - `def full_name` must be added as `field :full_name, String, null: false` on type definition (class UserType) - reading is camelCase on query

- Trying to register Bundler::GemfileError for status code 4 but Bundler::GemfileError is already registered
  - Probable issue in ruby 2.7 with bundler gemspec. Run `gem update --system 3.0.8 && gem update --system`. Ref: https://github.com/rubygems/rubygems/issues/3551
