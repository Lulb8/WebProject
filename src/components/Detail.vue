<template>
  <div id="recipe_single">
    <div>
      <v-breadcrumbs icons divider="mdi-chevron_right">
        <v-breadcrumbs-item replace :to="{name: 'home'}">Home</v-breadcrumbs-item>
        <v-breadcrumbs-item disabled>{{strMeal}}</v-breadcrumbs-item>
        <v-spacer></v-spacer>
        <v-btn primary light color="red white--text" replace :to="{name: 'home'}">Back</v-btn>
      </v-breadcrumbs>
    </div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md10 xs12 offset-md1>
          <v-layout row wrap>
            <figure class="image">
              <img :src="strMealThumb" alt="Image" width="250em" />
            </figure>
            <v-flex xs12 sm6 md8 class="recipe_info" style="padding-left: 80px">
              <h1 class="headline mb-0">{{strMeal}}</h1>
              <ul class="recipe_meta">
                <li>
                  <p>
                    <strong>DINKS</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>PREPARATION</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>COOK TIME</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>SERVINGS</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Category</strong>
                    <v-chip class="brown white--text">{{ strCategory }}</v-chip>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Area</strong>
                    <v-chip class="blue white--text">{{ strArea }}</v-chip>
                  </p>
                </li>
              </ul>
            </v-flex>
          </v-layout>
          <p class="mt-3"></p>
          <v-layout row wrap class="recipe_content_wrap">
            <v-flex xs12 md8 offset-md2>
              <div class="video-responsive">
                <iframe width="560" height="315" :src="strYoutube" frameborder="0" allowfullscreen></iframe>
              </div>
            </v-flex>
          </v-layout>
          <p class="mt-5"></p>
          <v-card class="white">
            <v-layout row wrap class="recipe_content_wrap">
              <!--<v-flex xs12 md6 order-md2>
                <h1 class="headline mb-0 amber white--text">Ingredients:</h1>
                <v-list avatar>
                  <v-list-tile v-for="(ingredient, i) in ingredients" :key="i">
                    <v-list-tile-avatar>
                      <v-icon class="amber--text text--darken-2">mdi-arrow-right-bold-outline</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ ingredient }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>-->
              <v-flex xs12>
                <h1 class="headline mb-0 orange white--text">Preparation:</h1>
                <p>{{ strInstructions }}</p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: [
    'idMeal',
    'strMeal',
    'strCategory',
    'strArea',
    'strInstructions',
    'strMealThumb',
    'strYoutube'
    /*,
    'strIngredient1',
    'strIngredient2',
    'strIngredient3',
    'strIngredient4',
    'strIngredient5',
    'strIngredient6',
    'strIngredient7',
    'strIngredient8',
    'strIngredient9',
    'strIngredient10' */
  ] /*,
  data: function () {
    return {
      ingredients: [
        'props.strIngredient1',
        'strIngredient2',
        'strIngredient3',
        'strIngredient4',
        'strIngredient5',
        'strIngredient6',
        'strIngredient7',
        'strIngredient8',
        'strIngredient9',
        'strIngredient10'
      ]
    }
  } */
}
</script>

<style>
#recipe_single .headline {
  font-size: 32px !important;
  padding-top: 15px;
}
.recipe_meta {
  padding-top: 30px;
  padding-left: 15px;
  list-style: none;

  margin-right: 10px;
}
.recipe_content_wrap {
  padding: 10px 20px;
}
.recipe_content {
  padding-top: 15px;
  padding-left: 10px;
}
.list {
  height: 30px;
}
.icon {
  font-size: 16px;
}
.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.video-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.breadcrumbs {
  color: #ffc107;
}
</style>
