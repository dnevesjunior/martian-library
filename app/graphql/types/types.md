Notes:

- Each field definition contains a name, a result type and options;
- `:null` is required and must be set to either `true` or `false`. (i.e. if it's a nullable item/field or not)
- `:description` adds a human-readable message to a field. Automatically added to documentation to provide context to readers
- The array notation for the result type declares what it must be, for instance: `[Types::ItemType]` means that the field value must be an array and each element of this array must be represented using the `Types::ItemType` type
  - It can be generated with `rails g graphql:object item`
- You may use UUID as a primary key in your table if you are worried about exposing sequential IDs