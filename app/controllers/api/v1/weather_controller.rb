class Api::V1::WeatherController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  require 'rest-client'

  def get_weather
    url = "https://api.open-meteo.com/v1/forecast?latitude=#{params["lat"]}&longitude=#{params["lng"]}&hourly=temperature_2m"
    response = RestClient.get(url)

    forecasted_time = JSON.parse(response)["hourly"]["time"]
    forecasted_weather = JSON.parse(response)["hourly"]["temperature_2m"]
    
    daily_forecasts = []
    forecasted_time.each do |hour|
      if hour.include?("T12:00")
        index = forecasted_time.index(hour)
        weather = forecasted_weather[index]
        fahrenheit_conversion = ((weather * (9/5)) + 32)
        unit = {"#{hour}": fahrenheit_conversion}
        daily_forecasts << unit
      end
    end

    render json: daily_forecasts
  end

end