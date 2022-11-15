class Api::V1::ResortsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

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

end