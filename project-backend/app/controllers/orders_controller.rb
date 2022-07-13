class OrdersController < ApplicationController
    def index 
        render json: Order.all 
    end

    def create
       character_class = Order.create!(class_params)
       render json: character_class
    end


    private
    def class_params
      params.permit(:name, :image_url, :description, :ability, :saves)
    end
end