class RemoveItemIdFromCharacters < ActiveRecord::Migration[7.0]
  def change
    remove_column :characters, :item_id, :string
  end
end
