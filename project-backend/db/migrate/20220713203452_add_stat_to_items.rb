class AddStatToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :stat, :string
  end
end
