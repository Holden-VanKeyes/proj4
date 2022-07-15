Rails.application.routes.draw do
  resources :character_items
  resources :orders, only: [:index]
  resources :items, only: [:index]
  resources :campaigns
  resources :characters
  resources :friends, only: [:index, :create, :destroy]
  resources :users, except: [:show, :create]

  # user signing up 
  post '/signup', to: "users#create"

  # creates session[:user_id] to log in
  post '/login', to: "sessions#create"

  # "remember" user via the session cookie
  get '/me', to: "users#show"

  # log out, destroy session cookie
  delete '/logout', to: "sessions#destroy"

  # get users characters for user-home
  get '/user_characters', to: "users#get_characters"




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
