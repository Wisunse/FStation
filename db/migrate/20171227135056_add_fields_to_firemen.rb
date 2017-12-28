class AddFieldsToFiremen < ActiveRecord::Migration[5.1]
  def change
    add_column :firemen, :second_name, :string;
    add_column :firemen, :father_name, :string;
    add_column :firemen, :birth_date, :date;
    add_column :firemen, :birt_place, :string;
    add_column :firemen, :sex, :string;
    add_column :firemen, :adres, :string;
    add_column :firemen, :phone, :string;
    add_column :firemen, :zip_code, :string;
    add_column :firemen, :place, :string;
    add_column :firemen, :id_station, :integer;
    add_column :firemen, :pesel, :string;
    add_column :firemen, :note, :text;
    add_column :firemen, :id_section, :text;
  end
end
