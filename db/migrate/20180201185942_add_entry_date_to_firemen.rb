class AddEntryDateToFiremen < ActiveRecord::Migration[5.1]
  def change
    add_column :firemen, :entry_date, :date
    add_column :cars, :insurance_date, :date
  end
end
