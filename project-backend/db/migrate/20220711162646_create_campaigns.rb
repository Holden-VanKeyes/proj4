class CreateCampaigns < ActiveRecord::Migration[7.0]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :genre
      t.text :notes
      t.integer :world_level
      t.datetime :start_time
      t.integer :admin_id

      t.timestamps
    end
  end
end
