export default class Movie {
  // eslint-disable-next-line camelcase
  constructor({ id, overview, popularity, poster_path, title }) {
    this.id = id
    this.overview = overview
    this.popularity = popularity
    // eslint-disable-next-line camelcase
    this.poster = `https://image.tmdb.org/t/p/w500/${poster_path}`
    this.title = title
  }
}
