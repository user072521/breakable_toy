class Api::V1::ResortsController < ApiController

  def index
    resorts = Resort.all.sort_by { |resort| [resort.state, resort.city ] } 
    resort_hash = {}

    resorts.each do |resort|
      if !resort_hash.key?(resort[:state])
        resort_hash["#{resort[:state]}"] = [resort]
      else
        resort_hash["#{resort[:state]}"] << resort
      end 
    end
    
    render json: ( resort_hash )
  end
  
  def show
    resort = Resort.find(params["id"])
    
    favorite = 0
    if (current_user != nil)
      if resort.users.include?(current_user)
        favorite = 2
      else
        favorite = 1
      end
    end

    render json: { 
      resort: Resort.find(params["id"]),
      favorite: favorite
    }
  end

end