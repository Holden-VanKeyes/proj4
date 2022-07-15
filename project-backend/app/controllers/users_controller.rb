class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create], :raise => false

    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

    def index 
        render json: User.all 
    end

    def show
        if current_user
            render json: current_user, only: [:id, :username]
        else 
            render json: {error:"No active session"}, status: :unauthorized
        end
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, only: [:id, :username], status: :created
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
      params.permit(:username, :password, :password_confirmation)
    end   

    def user_not_found
        render json: {error: "User not found"}, status: :not_found
    end
end
