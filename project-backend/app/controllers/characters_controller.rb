class CharactersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :character_not_found

    def index 
        render json: Character.all
    end

    def show
        character = Character.find(params[:id])
        render json: character
    end

    def create 
        character = Character.create!(character_params)
        render json: character, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update 
        character = Character.find(params[:id])
        character.update(character_params)
        render json: character, status: :accepted
    end 

    def destroy 
        character = Character.find(params[:id])
        character.destroy
        head :no_content
    end

    private 

    def character_params
        params.permit(
            :name, 
            :bio,
            :order_id,
            :level,
            :user_id,
            :campaign_id
        )
    end

    def character_not_found
        render json: {error:'Character not found'}, status: :not_found
    end
end
