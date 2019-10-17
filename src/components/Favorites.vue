<template>
  <div>
    <v-breadcrumbs>
      <v-breadcrumbs-item :to="{ name: 'home'}">Home</v-breadcrumbs-item>
      <v-icon>mdi-chevron-right</v-icon>
      <v-breadcrumbs-item disabled>My Favorites</v-breadcrumbs-item>
      <v-spacer></v-spacer>
      <v-btn primary light color="red white--text" replace :to="{name: 'home'}">Back</v-btn>
    </v-breadcrumbs>
    <div class="card large">
      <div class="card-image">
        <router-link
          :to="{ name: 'detail', params: { idMeal, strMeal, strCategory, strTags, strArea, strInstructions, strMealThumb, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10 }}"
        >
          <figure class="image">
            <img :src="strMealThumb" alt="Image" width="250em" />
          </figure>
        </router-link>
      </div>

      <div class="card-content content">
        <h4>{{ strMeal }}</h4>
        <p>{{ strCategory }}</p>
        <v-spacer></v-spacer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'favorites',
  props: ['strMeal', 'strCategory', 'strMealThumb']
}
</script>
