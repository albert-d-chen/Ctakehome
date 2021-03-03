@physicians.each do |physician|
    json.set! physician.id do 
        json.extract! physician, :id, :first_name, :last_name
    end
end