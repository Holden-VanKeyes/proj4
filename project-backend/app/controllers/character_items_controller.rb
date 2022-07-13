class CharacterItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :character_item_not_found

    def index 
        render json: CharacterItem.all
    end

    def show
        character_item = CharacterItem.find(params[:id])
        render json: character_item
    end

    def create 
        character_item = CharacterItem.create!(character_item_params)
        render json: character_item, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update 
        character_item = CharacterItem.find(params[:id])
        character_item.update(character_item_params)
        render json: character_item, status: :accepted
    end 

    def destroy 
        character_item = CharacterItem.find(params[:id])
        character_item.destroy
        head :no_content
    end

    private 

    def character_item_params
        params.permit(
            :character_id,
            :item_id
        )
    end

    def character_item_not_found
        render json: {error:'CharacterItem not found'}, status: :not_found
    end
end
