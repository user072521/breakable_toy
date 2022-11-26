class Api::V1::UsersController < ApiController

  def index
    render json: current_user
  end
  
  def create
    resort = Resort.find(params["resort"])
    
    if params["favorite"] === 1
      current_user.resorts << resort
      render json: { favorite: 2 }
    elsif params["favorite"] === 2
      current_user.resorts.delete(resort)
      render json: { favorite: 1 }
    end
  end
end