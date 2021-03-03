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
class Appointment < ApplicationRecord
    validates :name, :kind, :time, :physician_id, presence:true

    belongs_to :physician,
        foreign_key: :physician_id,
        class_name: :Physician

end
