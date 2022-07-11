class CreateCharacterClasses < ActiveRecord::Migration[7.0]
  def change
    create_table :character_classes do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :ability

      t.timestamps
    end
  end
end
