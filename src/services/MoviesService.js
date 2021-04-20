import { AppState } from '../AppState'
import Movie from '../models/Movie'
import { movieApi } from './AxiosService'

class MoviesService {
  async getMovies(query) {
    const res = await movieApi.get(query)
    AppState.results = res.data.results.map(r => new Movie(r))
  }

  setActive(movie) {
    AppState.activeMovie = movie
  }
}

export const moviesService = new MoviesService()
