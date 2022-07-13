class CreateCharacterItems < ActiveRecord::Migration[7.0]
  def change
    create_table :character_items do |t|
      t.integer :item_id
      t.integer :character_id

      t.timestamps
    end
  end
end
