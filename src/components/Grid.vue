<template>
  <section class="section">
    <div class="container">
      <magic-grid>
        <card
          v-for="(post, i) in posts"
          :key="i"
          :strMeal="post.strMeal"
          :strCategory="post.strCategory"
          :strMealThumb="post.strMealThumb" />
      </magic-grid>
    </div>
  </section>

</template>

<script>
import magicGrid from './magic-grid/magic-grid.vue'
import card from './Card.vue'
export default {
  name: 'grid',
  components: {
    card,
    magicGrid
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    fetch('https://raw.githubusercontent.com/Lulb8/Apis/master/meals.json')
      .then(response => response.json())
      .then(json => {
        this.posts = json.slice(0, 209)
      })
  }
}
</script>
