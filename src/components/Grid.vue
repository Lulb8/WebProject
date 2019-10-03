<template>
  <section class="section">
    <v-container fluid>
      <v-combobox
        v-model="model"
        :filter="filter"
        :hide-no-data="!search"
        :items="items"
        :search-input.sync="search"
        hide-selected
        label="Choose a category"
        multiple
        small-chips
        solo
      >
        <template v-slot:selection="{ attrs, item, parent, selected }">
          <v-chip
            v-if="item === Object(item)"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="selected"
            label
            small
          >
            <v-icon>{{ item.icon }}</v-icon>
            <span class="pr-2">{{ item.text }}</span>
            <v-icon small @click="parent.selectItem(item)">mdi-close-circle-outline</v-icon>
          </v-chip>
        </template>
        <template v-slot:item="{ index, item }">
          <v-text-field
            v-if="editing === item"
            v-model="editing.text"
            autofocus
            flat
            background-color="transparent"
            hide-details
            solo
          ></v-text-field>
          <v-chip v-else :color="`${item.color} lighten-3`" dark label small>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>{{ item.text }}</v-list-item-content>
          </v-chip>
          <div class="flex-grow-1"></div>
          <v-list-item-action @click.stop />
        </template>
      </v-combobox>
    </v-container>

    <div class="container">
      <magic-grid>
        <card
          v-for="(recipe, i) in filteredRecipes"
          :key="i"
          :strMeal="recipe.strMeal"
          :strCategory="recipe.strCategory"
          :strMealThumb="recipe.strMealThumb"
        />
      </magic-grid>
    </div>
  </section>
</template>

<script>
import magicGrid from "./magic-grid/magic-grid.vue";
import card from "./Card.vue";
export default {
  name: "grid",
  components: {
    card,
    magicGrid
  },
  data() {
    return {
      recipes: [],
      activator: null,
      attach: null,
      colors: [
        "brown",
        "red",
        "green",
        "green lighten-2",
        "yellow darken-1",
        "lime lighten-1",
        "blue",
        "orange",
        "amber",
        "pink",
        "red lighten-4",
        "red",
        "cyan",
        "deep-purple"
      ],
      index: -1,
      items: [
        { header: "Select a category" },
        {
          text: "Breakfast",
          color: "brown",
          icon: "mdi-food-croissant"
        },
        {
          text: "Starter",
          color: "red",
          icon: "mdi-nutrition"
        },
        {
          text: "Vegetarian",
          color: "green",
          icon: "mdi-leaf"
        },
        {
          text: "Vegan",
          color: "green lighten-2",
          icon: "mdi-sprout-outline"
        },
        {
          text: "Pasta",
          color: "yellow darken-1",
          icon: "mdi-pasta"
        },
        {
          text: "Side",
          color: "lime lighten-1",
          icon: "mdi-bowl"
        },
        {
          text: "Seafood",
          color: "blue",
          icon: "mdi-fish"
        },
        {
          text: "Lamb",
          color: "orange",
          icon: "mdi-sheep"
        },
        {
          text: "Chicken",
          color: "amber",
          icon: ""
        },
        {
          text: "Pork",
          color: "pink",
          icon: "mdi-pig-variant"
        },
        {
          text: "Goat",
          color: "red lighten-4",
          icon: ""
        },
        {
          text: "Beef",
          color: "red",
          icon: "mdi-cow"
        },
        {
          text: "Miscellaneous",
          color: "cyan",
          icon: "mdi-hexagon-multiple"
        },
        {
          text: "Dessert",
          color: "deep-purple",
          icon: "mdi-cupcake"
        }
      ],
      model: [
        {
          text: "All",
          color: "indigo",
          icon: "mdi-filter-remove"
        }
      ],
      nonce: 1,
      menu: false,
      x: 0,
      search: null,
      y: 0
    };
  },
  mounted() {
    fetch("https://raw.githubusercontent.com/Lulb8/Apis/master/meals.json")
      .then(response => response.json())
      .then(json => {
        this.recipes = json.slice(0, 209);
      });
  },

  computed: {
    filteredRecipes: function() {
      return this.recipes.filter(recipe => {
        return recipe.strCategory.match(this.search);
      });
    }
  },

  watch: {
    model(val, prev) {
      if (val.length === prev.length) return;
      this.model = val.map(v => {
        if (typeof v === "string") {
          v = {
            text: v,
            color: this.colors[this.nonce - 1]
          };
          this.items.push(v);
          this.nonce++;
        }
        return v;
      });
    }
  },

  methods: {
    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = val => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return text.toString().indexOf(query.toString()) > -1;
    }
  }
};
</script>
