import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Movie from './models/Movie'

export const AppState = reactive({
  /** @type {Movie[]} */
  results: [],
  /** @type {Movie} */
  activeMovie: null
})
