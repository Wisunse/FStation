class Car < ApplicationRecord
  has_one :Name
  has_one :RegistrationNumber
  has_one :ServicingTo
  has_one :InsuranceDate
end
