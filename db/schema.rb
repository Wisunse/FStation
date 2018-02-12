# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180212140245) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.text "name"
    t.text "registration_number"
    t.date "servicing_to"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "insurance_date"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_cars_on_user_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "date_course"
    t.string "date"
    t.date "expiry_date"
    t.date "medical_examination_from"
    t.date "medical_examination_to"
    t.bigint "firemen_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["firemen_id"], name: "index_courses_on_firemen_id"
    t.index ["user_id"], name: "index_courses_on_user_id"
  end

  create_table "departures", force: :cascade do |t|
    t.string "name"
    t.date "incident_date"
    t.bigint "user_id"
    t.text "firemens"
    t.text "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_departures_on_user_id"
  end

  create_table "firemen", force: :cascade do |t|
    t.string "name"
    t.string "surname"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "second_name"
    t.string "father_name"
    t.date "birth_date"
    t.string "birt_place"
    t.string "sex"
    t.string "adres"
    t.string "phone"
    t.string "zip_code"
    t.string "place"
    t.integer "id_station"
    t.string "pesel"
    t.text "note"
    t.string "section"
    t.date "entry_date"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_firemen_on_user_id"
  end

  create_table "medals", force: :cascade do |t|
    t.bigint "firemen_id"
    t.bigint "user_id"
    t.date "granting_date"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["firemen_id"], name: "index_medals_on_firemen_id"
    t.index ["user_id"], name: "index_medals_on_user_id"
  end

  create_table "medicals", force: :cascade do |t|
    t.string "name"
    t.date "examination_date"
    t.date "start_date"
    t.date "end_date"
    t.integer "firemen_id"
    t.integer "state_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "have_end"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_medicals_on_user_id"
  end

  create_table "models", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_models_on_email", unique: true
    t.index ["reset_password_token"], name: "index_models_on_reset_password_token", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "phone_number"
    t.boolean "is_admin"
    t.integer "admin_id"
    t.integer "roles_mask"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "cars", "users"
  add_foreign_key "courses", "firemen", column: "firemen_id"
  add_foreign_key "courses", "users"
  add_foreign_key "departures", "users"
  add_foreign_key "firemen", "users"
  add_foreign_key "medicals", "users"
end
