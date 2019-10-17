<template>
    <div>
      <v-breadcrumbs>
        <v-breadcrumbs-item :to="{ name: 'home'}">Home</v-breadcrumbs-item>
        <v-icon>mdi-chevron-right</v-icon>
        <v-breadcrumbs-item disabled>My Favorites</v-breadcrumbs-item>
        <v-spacer></v-spacer>
        <v-btn primary light color="red white--text" replace :to="{name: 'home'}">Back</v-btn>
      </v-breadcrumbs>
    </div>
</template>

<script>
export default {

}
</script>
