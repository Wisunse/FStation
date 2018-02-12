class AddUserToFiremen < ActiveRecord::Migration[5.1]
  def change
    add_reference :firemen, :user, foreign_key: true
  end
end
