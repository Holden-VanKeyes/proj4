class AddSavesToCharacterClass < ActiveRecord::Migration[7.0]
  def change
    add_column :character_classes, :saves, :string
  end
end
