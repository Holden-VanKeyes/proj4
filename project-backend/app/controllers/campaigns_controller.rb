class CampaignsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :campaign_not_found

    def index 
        render json: Campaign.all
    end

    def show
        campaign = Campaign.find(params[:id])
        render json: campaign
    end

    def create 
        campaign = Campaign.create!(campaign_params)
        render json: campaign, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update 
        campaign = Campaign.find(params[:id])
        campaign.update(campaign_params)
        render json: campaign, status: :accepted
    end 

    def destroy 
        campaign = Campaign.find(params[:id])
        campaign.destroy
        head :no_content
    end

    private 

    def campaign_params
        params.permit(
            :name, 
            :genre, 
            :notes, 
            :world_level, 
            :start_time
        )
    end

    def campaign_not_found
        render json: {error:'Campaign not found'}, status: :not_found
    end
end
