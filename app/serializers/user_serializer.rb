class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_photo

  has_many :resorts
end