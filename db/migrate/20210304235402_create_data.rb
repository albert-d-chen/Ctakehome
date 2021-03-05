class CreateData < ActiveRecord::Migration[5.2]
  def change
    drop_table :data
    create_table :data do |t|
      t.integer "timeSet", null: false
      t.integer "timeRemaining", null: false
      t.integer "data", null: false
      t.boolean "connected", null: false
      t.string "status", null: false
      t.timestamps
    end
  end
end
