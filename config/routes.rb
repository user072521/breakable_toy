Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/resorts", to: "homes#index" 

  namespace :api do
    namespace :v1 do
      resources :resorts, only: [:index]
    end
  end

end