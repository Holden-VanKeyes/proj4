# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
    allow do
      origins ''
      resource '', 
        headers: :any, 
        methods: [:get, :post, :delete, :put, :patch, :options, :head],
        credentials: true
    end
  end



run Rails.application
Rails.application.load_server
