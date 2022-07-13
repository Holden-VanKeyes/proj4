class RenameOrderToOrders < ActiveRecord::Migration[7.0]
  def change
    rename_table :order, :orders
  end
end
