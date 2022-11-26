Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/resorts", to: "homes#index" 
  get "/resorts/:id", to: "homes#index"
  get "/profile-page", to: "homes#index"

  get "/api/v1/weather", to: "api/v1/weather#get_weather"

  namespace :api do
    namespace :v1 do
      resources :resorts, only: [:index, :show]
      resources :users, only: [:index, :create]
    end
  end

end