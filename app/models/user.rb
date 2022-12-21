class User < ApplicationRecord
  validates :email, presence: true
  validates :encrypted_password, presence: true

  mount_uploader :profile_photo, ProfilePhotoUploader

  has_many :favorites
  has_many :resorts, through: :favorites
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
