class Favorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.belongs_to :resort, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
