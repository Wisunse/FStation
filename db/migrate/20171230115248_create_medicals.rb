class CreateMedicals < ActiveRecord::Migration[5.1]
  def change
    create_table :medicals do |t|
      t.string :name
      t.date :examination_date
      t.date :start_date
      t.date :end_date
      t.integer :firemen_id
      t.integer :state_id

      t.timestamps
    end
  end
end
