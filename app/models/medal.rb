class Medal < ApplicationRecord
  belongs_to :firemen
  belongs_to :user
  has_one :GrantingDate
  has_one :Name
end