class AddFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :phone_number, :string
    add_column :users, :is_admin, :boolean
    add_column :users, :admin_id, :integer
  end
end
