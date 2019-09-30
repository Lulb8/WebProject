<template>

  <div class="card large">
    <div class="card-image">
      <figure class="image">
        <img :src="strMealThumb" alt="Image" width="250em">
      </figure>
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
    }
  }
}
</script>
