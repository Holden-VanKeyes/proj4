class RemoveCharacterIdFromItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :character_id, :string
  end
end
