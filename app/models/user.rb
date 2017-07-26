class User < ApplicationRecord
  has_secure_password

  # def self.authenticate(username, submitted_password)
  #   user = find_by_email(username)
  #   return nil  if user.nil?
  #   return user if user.has_password?(submitted_password)
  # end
end
