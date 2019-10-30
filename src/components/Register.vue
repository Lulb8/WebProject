<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="orange" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-alert dense dismissible v-model="success" type="success">{{alertmsg}}</v-alert>
                  <v-alert dense dismissible v-model="warning" type="warning">{{alertmsg}}</v-alert>
                  <v-text-field
                    v-model="name"
                    :counter="20"
                    :rules="nameRules"
                    prepend-icon="mdi-account"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwordRules.required, passwordRules.min]"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 3 characters"
                    counter
                    prepend-icon="mdi-lock"
                    @click:append="show = !show"
                    required
                  ></v-text-field>
                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="register">Validate</v-btn>
                </v-form>
              </v-card-text>
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
    valid: true,
    warning: false,
    success: false,
    alertmsg: '',
    name: '',
    show: false,
    url: '', // 'http://localhost:4000'
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters'
    ],
    password: '',
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 3 || 'Min 3 characters',
      emailMatch: () => "The password you entered don't match"
    }
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    async register () {
      if (this.password === '' || this.name === '') {
        this.alertmsg = 'Password or name is empty'
        this.warning = true
      } else {
        const response = await this.axios.post(this.url + '/api/register', {
          name: this.name,
          password: this.password
        })
        this.alertmsg = 'Successfully created'
        this.success = true
        console.log('New user is:', response)
      }
    }
  }
}
</script>
