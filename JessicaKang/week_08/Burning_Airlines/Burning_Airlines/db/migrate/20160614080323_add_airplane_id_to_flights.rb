class AddAirplaneIdToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :airplane_id, :integer
  end
end
