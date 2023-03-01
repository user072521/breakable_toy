class FetchResorts {

  static async getResorts() {
    try {
      const response = await fetch("/api/v1/resorts")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const resortData = await response.json()
      return resortData
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  static async getSpecificResort(input) {
    try {
      const response = await fetch(`/api/v1/resorts/${input}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const resortData = await response.json()
      return resortData
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  static async getSpecificWeather(lat, lng) {
    try {
      const response = await fetch(`/api/v1/weather?lat=${lat}&amp;lng=${lng}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const resortData = await response.json()
      return resortData
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

}

export default FetchResorts