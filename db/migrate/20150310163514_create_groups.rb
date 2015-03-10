class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.text :info
      t.string :city
      t.string :state
      t.string :zip

      t.timestamps null: false
    end
  end
end
