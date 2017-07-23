class CreateFiremen < ActiveRecord::Migration[5.1]
  def change
    create_table :firemen do |t|
      t.string :name
      t.string :surname
      t.string :email

      t.timestamps
    end
  end
end
