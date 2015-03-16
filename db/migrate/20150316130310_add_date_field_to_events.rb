class AddDateFieldToEvents < ActiveRecord::Migration
  def change
    add_column :events, :date_field, :date
  end
end
