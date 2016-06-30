# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

u1 = User.create :name => 'Andy', :email => 'andy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :name => 'Buzz', :email => 'buzz@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

#
# create_table "airplanes", force: :cascade do |t|
#   t.integer  "row"
#   t.text     "column"
#   t.text     "name"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end


Airplane.destroy_all

a1 = Airplane.create :name => 'Boeing 747'
a2 = Airplane.create :name => 'Private Jet'
a3 = Airplane.create :name => 'Airbus 300'
