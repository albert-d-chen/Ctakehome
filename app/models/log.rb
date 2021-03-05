class Log < ApplicationRecord
    validates :timeSet, :timeRemaining, :connected, :status, :data, presence:true
end
