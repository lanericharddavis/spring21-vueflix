<template>
  <div class="Results">
    <ul>
      <li v-for="movie in state.results" :key="movie.id" @click="setActive(movie)">
        {{movie.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { moviesService } from '../services/MoviesService'
export default {
  name: 'results',
  setup() {
    const state = reactive({
      results: computed(() => AppState.results)
    })
    return {
      state,
      setActive(movie) {
        moviesService.setActive(movie)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
