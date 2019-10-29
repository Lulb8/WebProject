<template>
  <div>
    <v-breadcrumbs>
      <v-breadcrumbs-item :to="{ name: 'home'}">Home</v-breadcrumbs-item>
      <v-icon>mdi-chevron-right</v-icon>
      <v-breadcrumbs-item disabled>My Favorites</v-breadcrumbs-item>
      <v-spacer></v-spacer>
      <v-btn primary light color="red white--text" replace :to="{name: 'home'}">Back</v-btn>
    </v-breadcrumbs>
    <ul>
      <li v-for="fav in listFavorites">
        {{ fav.nameRecipe }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'favorites',
  data: () => ({
    favorites: false,
    url: 'http://localhost:4000',
    listFavorites: []
  }),
  // props: [ 'idMeal', 'strMeal', 'strCategory', 'strTags', 'strArea', 'strInstructions', 'strMealThumb', 'strYoutube', 'strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient5', 'strIngredient6', 'strIngredient7', 'strIngredient8', 'strIngredient9', 'strIngredient10' ]
  mounted () {
    this.axios
      .get(this.url + '/api/getFavorites', {})
      .then(response => (this.listFavorites = response.data.favorites))
  }
}
</script>
