class Firemen < ApplicationRecord

  has_one :Name
  has_one :Surname
  has_one :Email

  # def as_json(options = {})
  #   super(options.merge(include: :name))
  # end

end
