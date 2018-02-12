class CreateMedals < ActiveRecord::Migration[5.1]
  def change
    create_table :medals do |t|
      t.references :firemen
      t.references :user
      t.date :granting_date
      t.string :name

      t.timestamps
    end
  end
end
