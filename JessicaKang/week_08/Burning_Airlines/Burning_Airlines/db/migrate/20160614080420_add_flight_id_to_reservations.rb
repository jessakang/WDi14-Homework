class AddFlightIdToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :flight_id, :integer
  end
end
