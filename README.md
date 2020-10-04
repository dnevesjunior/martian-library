Martian Library from: https://evilmartians.com/chronicles/graphql-on-rails-1-from-zero-to-the-first-query

Notes will stay here

Steps:

- Remove unnecessary generators

- Prepare the data model

- Seed pre-generated data

- Setup database

- Setup GraphQL

Troubleshoot:

- Sprockets::Rails::Helper::AssetNotPrecompiled in GraphiQL::Rails::Editors#show

  - Cause is graphiql css and js not being precompile. Add lines from commit on app/assets/config/manifest.js