<template>
  <v-app id="inspire" style="height:0">
    <v-navigation-drawer v-model="drawer" app left>
      <v-list dense>
        <v-list-item :to="{name: 'home'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'register'}">
          <v-list-item-action>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'login'}">
          <v-list-item-action>
            <v-icon>mdi-account-lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-account-remove</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'favorites'}">
          <v-list-item-action>
            <v-icon>mdi-heart-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#C62828" dark>
      <div class="flex-grow-0"></div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Meals App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Utilisateur actuel : {{ currentUser }}</v-toolbar-title>
    </v-app-bar>

    <v-footer color="#8e0000" app>
      <div class="flex-grow-1"></div>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    url: '', // 'http://localhost:4000'
    currentUser: ''
  }),
  methods: {
    async logout () {
      const logout = await this.axios.get(this.url + '/api/logout')
      this.isconnected = false
      console.log(logout)
    }
  },
  mounted () {
    this.axios
      .get(this.url + '/api/getUser', {})
      .then(response => (this.currentUser = response.data.currentUser))
  }
}
</script>
