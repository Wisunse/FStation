class CreateDepartures < ActiveRecord::Migration[5.1]
  def change
    create_table :departures do |t|
      t.string :name
      t.date :incident_date
      t.references :user, foreign_key: true
      t.text :firemens
      t.text :note

      t.timestamps
    end
  end
end
