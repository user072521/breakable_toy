Rails.application.routes.draw do
  root 'landings#index'
  devise_for :users

  get "/resorts", to: "homes#index" 
  get "/resorts/:id", to: "homes#index"
  get "/profile-page", to: "homes#authenticated"

  get "/api/v1/weather", to: "api/v1/weather#get_weather"
  get "/api/v1/spreadsheet", to: "api/v1/weather#get_spreadsheet"
  post "/api/v1/picture", to: "api/v1/users#set_photo"

  namespace :api do
    namespace :v1 do
      resources :resorts, only: [:index, :show]
      resources :users, only: [:index, :create]
    end
  end

end