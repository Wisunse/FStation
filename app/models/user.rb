class User < ApplicationRecord
  # attr_accessor :Username, :Password, :Password_digest, :Email
  # validates :username, presence: true
  # validates :password, presence: true
  # validates :password_digest, presence: true
  # validates :email, presence: true
  # has_one :Username
  # has_one :Password
  # has_one :Password_digest
  # has_one :Email

    # def self.authenticate(username, submitted_password)
  #   user = find_by_email(username)
  #   return nil  if user.nil?
  #   return user if user.has_password?(submitted_password)
  # end

  has_secure_password
end
