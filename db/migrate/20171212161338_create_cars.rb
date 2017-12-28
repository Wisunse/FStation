class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.text :name
      t.text :registration_number
      t.date :servicing_to

      t.timestamps
    end
  end
end
