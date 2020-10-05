FactoryBot.define do
  factory :user do
    # sequence makes sure that the value is unique
    sequence(:email) { |n| "user-#{n}@example.com" }
  end
end