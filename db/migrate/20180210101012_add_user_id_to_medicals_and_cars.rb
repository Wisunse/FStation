class AddUserIdToMedicalsAndCars < ActiveRecord::Migration[5.1]
  def change
    add_reference :medicals, :user, foreign_key: true
    add_reference :cars, :user, foreign_key: true
    add_reference :courses, :user, foreign_key: true
  end
end