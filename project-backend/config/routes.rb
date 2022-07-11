Rails.application.routes.draw do
  resources :character_classes
  resources :items
  resources :campaigns
  resources :characters
  resources :friends
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
