@appointments.each do |appointment|
    json.set! appointment.id do 
        json.extract! appointment, :id, :physician_id, :name, :time, :kind
    end
end