# Martian Library from: https://evilmartians.com/chronicles/graphql-on-rails-1-from-zero-to-the-first-query

## Notes will stay here

### Steps:

- Create database `rake db:create db:migrate db:seed`

- Run package instalations `bundle install && yarn install`

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

- Introduce mutations
  - Authenticate the user via their email address
  - Create frontend resource to handle authentication
  - Add tokens to Apollo client

- Library mutations
  - Add Item
  - Update Item

- Mutation Views
  - Update Item
  - Add Item
  - Update cache on list after Update
  - Update Item Form

- Add Optimistic Update

- Refactoring
  - DRY on queries
  - Fragments
  - Handling errors

### Notes:

> GraphQL is transport-agnostic, but most implementations, including ruby-graphql, use HTTP POST requests. Requests are sent to GraphqlController#execute.
  - #execute parameters
    - `query` and `variables` represent a query string and arguments sent by a client respectively;
    - `context` is an arbitrary hash, which will be available during the query execution everywhere;
    - `operation_name` picks a named operation from the incoming request to execute (could be empty)

    - This is connected to the backend through the http link configured on app/javascript/utils/apollo.js

- queries are defined in operations.graphql

- GraphQL has its own "variables" called [fragment](https://graphql.github.io/graphql-spec/draft/#sec-Language.Fragments). A fragment is a named set of fields on a specific type.

### Tips:

- If you’re using Google Chrome, mind installing the Apollo extension. (Apollo Client Developer Tools on Firefox Browser Add-Ons)

- The N+1 problem is not very efficient using `.preload()`, two better approaches seem to be: [lazy eager loading](https://github.com/DmitryTsepelev/ar_lazy_preload) and [batch loading](https://github.com/Shopify/graphql-batch)

- [CSS Modules](https://github.com/css-modules/css-modules) help avoid styles clashes

### Troubleshoot:

- Sprockets::Rails::Helper::AssetNotPrecompiled in GraphiQL::Rails::Editors#show

  - Cause is graphiql css and js not being precompiled. Add lines to app/assets/config/manifest.js
  ```javascript
    //= link graphiql/rails/application.css
    //= link graphiql/rails/application.js
  ```

- "Field 'full_name' doesn't exist on type 'User'"
  - `def full_name` must be added as `field :full_name, String, null: false` on type definition (class UserType) - reading is camelCase on query

- Trying to register Bundler::GemfileError for status code 4 but Bundler::GemfileError is already registered
  - Probable issue in ruby 2.7 with bundler gemspec. Run `gem update --system 3.0.8 && gem update --system`. Ref: https://github.com/rubygems/rubygems/issues/3551
