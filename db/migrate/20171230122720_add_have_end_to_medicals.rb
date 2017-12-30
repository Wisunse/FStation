class AddHaveEndToMedicals < ActiveRecord::Migration[5.1]
  def change
    add_column :medicals, :have_end, :bool
  end
end
