class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

    def index 
        render json: User.all 
    end

    def show
        user = User.find(params[:id])
        render json: user 
    end

    def create 

    end

    def update

    end

    def destroy
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    private 

    def user_not_found
        render json: {error: "User not found"}, status: :not_found
    end
end
