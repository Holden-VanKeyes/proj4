class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.text :bio
      t.integer :level
      t.integer :class_id
      t.integer :user_id
      t.integer :campaign_id

      t.timestamps
    end
  end
end
