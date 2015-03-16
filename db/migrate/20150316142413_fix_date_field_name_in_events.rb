class FixDateFieldNameInEvents < ActiveRecord::Migration
  def change
    rename_column :events, :date_field, :start
  end
end
