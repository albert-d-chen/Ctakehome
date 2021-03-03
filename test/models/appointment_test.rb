# == Schema Information
#
# Table name: appointments
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  time         :string           not null
#  kind         :string           not null
#  physician_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class AppointmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
