class Api::V1::UsersController < ApiController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

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

  def set_photo
    current_user.profile_photo = File.open(params["profile_photo"].tempfile)
    current_user.save!
    render json: current_user
  end

end