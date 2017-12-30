class Medical < ApplicationRecord
  has_one :Name
  has_one :ExaminationDate
  has_one :StartDate
  has_one :SndDate
  has_one :FiremenId
  has_one :StateId
  has_one :HaveEnd
end
