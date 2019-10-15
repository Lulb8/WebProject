<template>
  <div>
    <p>Name : {{strMeal}}</p>
    <p>Category : {{strCategory}}</p>
    <p>Area : {{strArea}}</p>
    <p>Instructions : {{strInstructions}}</p>
    <p>Picture : {{strMealThumb}}</p>
    <p>Video : {{strYoutube}}</p>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: ['idMeal', 'strMeal', 'strCategory', 'strArea', 'strInstructions', 'strMealThumb', 'strYoutube']
}
</script>
