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
        user = User.create!(user_params)
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    private 

    def user_params
      params.permit(:username, :password_digest)
    end   

    def user_not_found
        render json: {error: "User not found"}, status: :not_found
    end
end
