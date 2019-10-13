<template>
  <div class="card large">

      <div class="card-image">
        <router-link :to="{ name: 'detail', params: { idMeal }}">
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
    return {
      idMeal: `idMeal`
    }
  },
  props: {
    strMeal: {
      type: String,
      default: ''
    },
    strCategory: {
      type: String,
      default: ''
    },
    strMealThumb: {
      type: Image,
      default: ''
    },
    idMeal: {
      type: String,
      default: ''
    }
  }
}
</script>
