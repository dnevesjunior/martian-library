module Mutations
  class SignInMutation < Mutations::BaseMutation
    # this class is strongly typed and validates input data according to its schema
    argument :email, String, required: true

    field :token, String, null: true
    field :user, Types::UserType, null: true

    # resolve is used to manipulate the mutation
    def resolve(email:)
      user = User.find_by!(email: email)

      token = Base64.encode64(user.email)
      {
        token: token,
        user: user
      }
    rescue ActiveRecord::RecordNotFound
      raise GraphQL::ExecutionError, 'user not found'
    end
  end
end
