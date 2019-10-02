<template>
  <section class="section">
    <div class="container">
      <magic-grid>
        <card
          v-for="(recipe, i) in recipes"
          :key="i"
          :strMeal="recipe.strMeal"
          :strCategory="recipe.strCategory"
          :strMealThumb="recipe.strMealThumb" />
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
      recipes: []
    }
  },
  mounted () {
    fetch('https://raw.githubusercontent.com/Lulb8/Apis/master/meals.json')
      .then(response => response.json())
      .then(json => {
        this.recipes = json.slice(0, 209)
      })
  }
}
</script>
