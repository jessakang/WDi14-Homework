# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160616094941) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airplanes", force: :cascade do |t|
    t.integer  "row"
    t.text     "column"
    t.text     "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flights", force: :cascade do |t|
    t.text     "flight_number"
    t.text     "origin"
    t.text     "destination"
    t.datetime "date"
    t.text     "plane"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "airplane_id"
  end

  create_table "flights_users", id: false, force: :cascade do |t|
    t.integer "flight_id", null: false
    t.integer "user_id",   null: false
  end

  add_index "flights_users", ["flight_id", "user_id"], name: "index_flights_users_on_flight_id_and_user_id", using: :btree
  add_index "flights_users", ["user_id", "flight_id"], name: "index_flights_users_on_user_id_and_flight_id", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "flight_id"
    t.text     "seatID"
  end

  create_table "users", force: :cascade do |t|
    t.text     "email"
    t.text     "name"
    t.boolean  "admin",           default: false
    t.text     "password_digest"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end
