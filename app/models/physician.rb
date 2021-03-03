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
class Physician < ApplicationRecord
    validates :first_name, :last_name, presence:true

    has_many :appointments,
        class_name: :Appointment,
        foreign_key: :physician_id
end
