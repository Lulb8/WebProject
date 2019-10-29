<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="orange" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="name"
                    label="Name"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    prepend-icon="mdi-lock"
                    @click:append="show = !show"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" class="mr-4" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    show: false,
    drawer: null,
    url: 'http://localhost:4000' // 'http://localhost:4000'
  }),
  methods: {
    async login () {
      // connecter l'utilisateur
      const response = await this.axios.post(this.url + '/api/login', {
        name: this.name,
        password: this.password
      })
      console.log('response', response)
        .then((response) => {
          console.log('Logged in')
        // router.push('/home')
        })
        .catch((errors) => {
          console.log('Cannot log in')
        })
      console.log('reponse status :', response)
      if (response.status === 200) {
        this.isconnected = true
        console.log('valid if: ', this.valid)
        // Permet de vider le champs de texte après connexion
        this.password = ''
        this.name = ''
      }
      console.log('response is:', response)
    }
  }
}
</script>
