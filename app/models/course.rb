class Course < ApplicationRecord
  has_one :Name
  has_one :DateCourse
  has_one :Date
  has_one :ExpiryDate
  has_one :MedicalExaminationFrom
  has_one :MedicalExaminationTo
  belongs_to :firemen
end
