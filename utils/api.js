const BASE_API = 'https://yts.am/api/v2/'

class Api {
  /**
   * Get the suggestion from the API
   * @param {number} id 
   */
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
    const { data } = await query.json()
    return data.movies
  }
  /**
   * Get the list of movies to create the categories
   */
  async getCategories() {
    const query = await fetch(`${BASE_API}list_movies.json?`)
    const { data } = await query.json()
    return data.movies
  }

  /**
   * Search movie and get the first element
   * @param {string} title movie title
   */
  async searchMovie(title) {
    // Fetch the API bringing only one movie and sorting with the most rating
    const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`)
    const { data } = await query.json()
    return data.movies
  }
}

export default new Api()