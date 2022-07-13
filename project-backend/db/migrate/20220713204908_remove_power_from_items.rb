class RemovePowerFromItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :power_level, :integer
    remove_column :items, :power, :integer
  end
end
