class AddSeatIdToReservation < ActiveRecord::Migration
  def change
    add_column :reservations, :seatID, :text
  end
end
