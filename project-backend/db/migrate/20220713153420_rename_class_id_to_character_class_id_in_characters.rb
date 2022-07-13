class RenameClassIdToCharacterClassIdInCharacters < ActiveRecord::Migration[7.0]
  def change
    rename_column :characters, :class_id, :character_class_id
  end
end
