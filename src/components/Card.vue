<template>
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
      <router-link
        :to="{ name: 'favorites', params: { strMeal, strCategory, strMealThumb }}"
      >
      <v-chip color="red" outlined class="mr-2" @click="favorite(strMeal)">
        <v-icon v-if="isFavorited">mdi-heart</v-icon>
        <v-icon v-else>mdi-heart-outline</v-icon>
      </v-chip>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data: function () {
    return {
      isFavorited: false
    }
  },
  methods: {
    favorite (name) {
      // alert('Add ' + name + ' to favorites'),
      if (this.isFavorited === false) {
        this.isFavorited = true
      } else {
        this.isFavorited = false
      }
    }
  },
  props: {
    idMeal: {
      type: String,
      default: ''
    },
    strMeal: {
      type: String,
      default: ''
    },
    strCategory: {
      type: String,
      default: ''
    },
    strTags: {
      type: String,
      default: ''
    },
    strArea: {
      type: String,
      default: ''
    },
    strInstructions: {
      type: String,
      default: ''
    },
    strMealThumb: {
      type: Image,
      default: ''
    },
    strYoutube: {
      type: String,
      default: ''
    },
    strIngredient1: {
      type: String,
      default: ''
    },
    strIngredient2: {
      type: String,
      default: ''
    },
    strIngredient3: {
      type: String,
      default: ''
    },
    strIngredient4: {
      type: String,
      default: ''
    },
    strIngredient5: {
      type: String,
      default: ''
    },
    strIngredient6: {
      type: String,
      default: ''
    },
    strIngredient7: {
      type: String,
      default: ''
    },
    strIngredient8: {
      type: String,
      default: ''
    },
    strIngredient9: {
      type: String,
      default: ''
    },
    strIngredient10: {
      type: String,
      default: ''
    }
  }
}
</script>
