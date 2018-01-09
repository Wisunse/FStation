class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :date_course
      t.string :date
      t.date :expiry_date
      t.date :medical_examination_from
      t.date :medical_examination_to
      t.references :firemen, foreign_key: true

      t.timestamps
    end
  end
end
