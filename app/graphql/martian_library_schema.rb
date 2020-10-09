class MartianLibrarySchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # This new runtime renders error when trying SignMeIn mutation. Take a look at it when possible
  # Opt in to the new runtime (default in future graphql-ruby versions)
  # use GraphQL::Execution::Interpreter
  # use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  # use GraphQL::Pagination::Connections
end
