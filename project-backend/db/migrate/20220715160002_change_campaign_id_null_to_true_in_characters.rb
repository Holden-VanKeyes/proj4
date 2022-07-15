class ChangeCampaignIdNullToTrueInCharacters < ActiveRecord::Migration[7.0]
  def change
    change_column_null :characters, :campaign_id, :true
  end
end
