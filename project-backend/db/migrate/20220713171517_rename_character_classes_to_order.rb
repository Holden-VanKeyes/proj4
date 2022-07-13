class RenameCharacterClassesToOrder < ActiveRecord::Migration[7.0]
  def change
    rename_table :character_classes, :order
  end
end
