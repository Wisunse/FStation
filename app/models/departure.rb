class Departure < ApplicationRecord
  has_one :Name
  has_one :IncidentDate
  has_one :Firemens
  has_one :Note
  belongs_to :user
end
