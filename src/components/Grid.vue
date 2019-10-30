<template>
  <v-container fluid>
    <v-select
      v-model="search"
      :items="items"
      label="Select a category"
      outlined
      small-chips
      clearable
      dense
      :hint="`${ search }`"
      persistent-hint
      :hide-no-data="!search"
      :search-input.sync="search"
    ></v-select>
    <div class="container">
      <magic-grid>
        <card
          v-for="(recipe, i) in filteredRecipes"
          :key="i"
          :idMeal="recipe.idMeal"
          :strMeal="recipe.strMeal"
          :strCategory="recipe.strCategory"
          :strArea="recipe.strArea"
          :strMealThumb="recipe.strMealThumb"
          :strInstructions="recipe.strInstructions"
          :strYoutube="recipe.strYoutube"
          :strTags="recipe.strTags"
          :strIngredient1="recipe.strIngredient1"
          :strIngredient2="recipe.strIngredient2"
          :strIngredient3="recipe.strIngredient3"
          :strIngredient4="recipe.strIngredient4"
          :strIngredient5="recipe.strIngredient5"
          :strIngredient6="recipe.strIngredient6"
          :strIngredient7="recipe.strIngredient7"
          :strIngredient8="recipe.strIngredient8"
          :strIngredient9="recipe.strIngredient9"
          :strIngredient10="recipe.strIngredient10"
        />
      </magic-grid>
    </div>
  </v-container>
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
  data: () => ({
    search: '',
    recipes: [],
    colors: [
      'brown',
      'red',
      'green',
      'green lighten-2',
      'yellow darken-1',
      'lime lighten-1',
      'blue',
      'orange',
      'amber',
      'pink',
      'red lighten-4',
      'red',
      'cyan',
      'deep-purple'
    ],
    items: [
      { header: 'Select a category' },
      {
        text: 'Breakfast',
        color: 'brown',
        icon: 'mdi-food-croissant'
      },
      {
        text: 'Starter',
        color: 'red',
        icon: 'mdi-nutrition'
      },
      {
        text: 'Vegetarian',
        color: 'green',
        icon: 'mdi-leaf'
      },
      {
        text: 'Vegan',
        color: 'green lighten-2',
        icon: 'mdi-sprout-outline'
      },
      {
        text: 'Pasta',
        color: 'yellow darken-1',
        icon: 'mdi-pasta'
      },
      {
        text: 'Side',
        color: 'lime lighten-1',
        icon: 'mdi-bowl'
      },
      {
        text: 'Seafood',
        color: 'blue',
        icon: 'mdi-fish'
      },
      {
        text: 'Lamb',
        color: 'orange',
        icon: 'mdi-sheep'
      },
      {
        text: 'Chicken',
        color: 'amber',
        icon: ''
      },
      {
        text: 'Pork',
        color: 'pink',
        icon: 'mdi-pig-variant'
      },
      {
        text: 'Goat',
        color: 'red lighten-4',
        icon: ''
      },
      {
        text: 'Beef',
        color: 'red',
        icon: 'mdi-cow'
      },
      {
        text: 'Miscellaneous',
        color: 'cyan',
        icon: 'mdi-hexagon-multiple'
      },
      {
        text: 'Dessert',
        color: 'deep-purple',
        icon: 'mdi-cupcake'
      }
    ]
    /* model: [
        {
          text: 'All',
          color: 'indigo',
          icon: 'mdi-filter-remove'
        }
      ], */
  }),
  mounted () {
    fetch('https://raw.githubusercontent.com/Lulb8/Apis/master/meals.json')
      .then(response => response.json())
      .then(json => {
        this.recipes = json.slice(0, 209)
      })
  },
  computed: {
    filteredRecipes: function () {
      return this.recipes.filter(recipe => {
        return recipe.strCategory
          .toLowerCase()
          .match(this.search.toLowerCase())
      })
    }
  }
}
</script>
