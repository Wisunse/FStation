class Car < ApplicationRecord
  has_one :name
  has_one :registration_number
  has_one :servicing_to

  # def as_json(options = {})
  #   super(options.merge(include: :name))
  # end

end
