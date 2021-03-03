# == Schema Information
#
# Table name: physicians
#
#  id         :bigint           not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class PhysicianTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
