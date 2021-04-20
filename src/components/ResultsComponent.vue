<template>
  <div class="Results">
    <!-- NOTE to pass prop data to a child component it is passed as a bound attribute -->
    <MediaElement v-for="movie in state.results" :key="movie.id" :movie="movie" @click="setActive(movie)"/>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { moviesService } from '../services/MoviesService'
import MediaElement from './MediaElementComponent'

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
  components: {
    MediaElement
  }
}
</script>

<style lang="scss" scoped>

</style>
