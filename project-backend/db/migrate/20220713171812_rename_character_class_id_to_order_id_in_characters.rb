class RenameCharacterClassIdToOrderIdInCharacters < ActiveRecord::Migration[7.0]
  def change
    rename_column :characters, :character_class_id, :order_id
  end
end
