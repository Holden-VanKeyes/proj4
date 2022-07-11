class CharacterClassesController < ApplicationController
    def index 
        render json: CharacterClass.all 
    end
end
