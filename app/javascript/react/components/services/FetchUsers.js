class FetchUsers {

  static async getUser() {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const userData = await response.json()
      return userData
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

}

export default FetchUsers