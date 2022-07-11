class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :type
      t.string :image_url
      t.integer :power_level
      t.integer :character_id

      t.timestamps
    end
  end
end
