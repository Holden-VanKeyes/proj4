class ChangeTypeToCategoryInItems < ActiveRecord::Migration[7.0]
  def change
    rename_column :items, :type, :category 
  end
end
