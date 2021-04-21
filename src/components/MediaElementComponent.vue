<template>
<div class="media">
  <img :src="movie.poster" class="mr-3 smPoster" alt="Movie poster">
  <div class="media-body">
    <h5 class="mt-0">{{movie.title}}</h5>
    <p>Popularity: {{movie.popularity}}</p>
    <p>Release Date: {{movie.releaseDate}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MediaElement',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.media {
  cursor: pointer;
  &:hover {
    outline: 1px solid grey;
  }
}

.smPoster{
  height: 6rem;
}

</style>
