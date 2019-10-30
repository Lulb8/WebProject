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
                  <v-alert dense dismissible v-model="success" type="success">{{alertmsg}}</v-alert>
                  <v-alert dense dismissible v-model="warning" type="warning">{{alertmsg}}</v-alert>
                  <v-alert dense dismissible v-model="error" type="error">{{alertmsg}}</v-alert>
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
                <v-btn color="success" class="mr-4" @click="login">Login {{ uName }}</v-btn>
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
  data: () => ({
    name: '',
    password: '',
    error: false,
    warning: false,
    success: false,
    alertmsg: '',
    show: false,
    drawer: null,
    url: '' // 'http://localhost:4000'
  }),
  methods: {
    async login () {
      // connecter l'utilisateur
      if (this.password === '' || this.name === '') {
        this.alertmsg = 'Password or name is empty'
        this.warning = true
      } else {
        await this.axios
          .post(this.url + '/api/login', {
            name: this.name,
            password: this.password
          })
          .then(response => {
            console.log('Logged in')
            this.alertmsg = 'Successfully logged in'
            this.success = true
            console.log(response)
            if (response.status === 200) {
              this.isconnected = true
            }
          })
          .catch(errors => {
            console.log('Cannot log in')
            this.alertmsg = 'Password, name or account is wrong'
            this.error = true
          })
      }
    }
  }
}
</script>
