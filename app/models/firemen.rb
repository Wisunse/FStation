class Firemen < ApplicationRecord

  has_one :Name
  has_one :Surname
  has_one :Email
  has_one  :SecondName
  has_one  :FatherName
  has_one  :BirthDate
  has_one  :BirtPlace
  has_one  :Sex
  has_one  :Adres
  has_one  :Phone
  has_one  :Zip_code
  has_one  :Place
  has_one  :IdStation
  has_one  :Pesel
  has_one  :Note
  has_one :Section

end