class RemoveAdminIdFromCampaigns < ActiveRecord::Migration[7.0]
  def change
    remove_column :campaigns, :admin_id, :string
  end
end
