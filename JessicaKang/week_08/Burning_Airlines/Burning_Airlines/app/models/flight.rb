# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :text
#  origin        :text
#  destination   :text
#  date          :datetime
#  plane         :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Flight < ActiveRecord::Base
  has_many :reservations
  belongs_to :airplane
  has_many :users, :through => :reservations
end
