class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :authorize 

    private 

    def authorize 
        return render json: {error:"Not authorized"}, status: :unauthorized unless current_user
    end

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end 
        
end
