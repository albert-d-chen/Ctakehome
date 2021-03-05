@logs.each do |log|
    json.set! log.id do 
        json.extract! log, :timeSet, :timeRemaining, :connected, :status, :data
    end
end