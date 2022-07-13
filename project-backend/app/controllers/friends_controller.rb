class FriendsController < ApplicationController
    def index 
        render json: Friend.all 
    end

    def create 
        friend = Friend.create!(friend_params)
        render json: friend, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def destroy
        friend = Friend.find(params[:id])
        friend.destroy
        head :no_content
    end

    private 

    def friend_params
        params.permit(
            :user_id,
            :friend_id
        )
    end
end
