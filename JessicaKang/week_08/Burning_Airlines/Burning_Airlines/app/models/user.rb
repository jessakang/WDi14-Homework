# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :text
#  name            :text
#  admin           :boolean
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  has_many :reservations
  has_many :flights, :through => :reservations
end
