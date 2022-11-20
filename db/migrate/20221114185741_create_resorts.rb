class CreateResorts < ActiveRecord::Migration[5.2]
  def change
    create_table :resorts do |t|
      t.string :name, null: false
      t.string :website, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false

      t.timestamps null: false
    end
  end
end
