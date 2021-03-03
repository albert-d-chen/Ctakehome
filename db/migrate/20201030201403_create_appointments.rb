class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :name, null:false
      t.string :time, null:false
      t.string :kind, null:false
      t.integer :physician_id, null:false
      
      t.timestamps
    end
  end
end
