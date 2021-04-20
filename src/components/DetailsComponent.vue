<template>
  <div class="details-component" v-if="state.movie">
    <img :src="state.movie.poster" alt="">
    <h3>{{state.movie.title}}</h3>
    <p>Popularity: {{state.movie.popularity}}</p>
    <p>{{state.movie.overview}}</p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'DetailsComponent',
  setup() {
    const state = reactive({
      movie: computed(() => AppState.activeMovie)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
