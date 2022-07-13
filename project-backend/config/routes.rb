Rails.application.routes.draw do
  resources :character_items
  resources :orders, only: [:index]
  resources :items, only: [:index]
  resources :campaigns
  resources :characters
  resources :friends, only: [:index, :create, :destroy]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
