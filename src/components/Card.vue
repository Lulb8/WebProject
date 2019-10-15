<template>
  <div class="card large">
    <div class="card-image">
      <router-link :to="{ name: 'detail', params: { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube }}">
        <figure class="image">
          <img :src="strMealThumb" alt="Image" width="250em" />
        </figure>
      </router-link>
    </div>

    <div class="card-content content">
      <h4>{{ strMeal }}</h4>
      <p>{{ strCategory }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {}
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
    }
  }
}
</script>
