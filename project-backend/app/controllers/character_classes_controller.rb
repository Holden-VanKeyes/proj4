class CharacterClassesController < ApplicationController
    def index 
        render json: CharacterClass.all 
    end

    def create
       character_class = CharacterClass.create!(class_params)
       render json: character_class
    end


    private
    def class_params
      params.permit(:name, :image_url, :description, :ability)
    end
end
