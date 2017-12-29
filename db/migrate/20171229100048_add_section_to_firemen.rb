class AddSectionToFiremen < ActiveRecord::Migration[5.1]
  def change
    add_column :firemen, :section, :string
  end
end
