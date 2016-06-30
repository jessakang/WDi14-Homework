class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.integer :row
      t.text :column
      t.text :name

      t.timestamps null: false
    end
  end
end
