class RenameColumnNameToTitleInEvents < ActiveRecord::Migration
  def change
    rename_column :events, :name, :title
  end
end
