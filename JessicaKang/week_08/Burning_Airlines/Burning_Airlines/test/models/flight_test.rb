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

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
