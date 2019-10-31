<template>
  <div>
    <div v-if="error" class="alert alert-danger">
      {{error}}
    </div>
    <div class="alert" v-if="$auth.$state.redirect">
      You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong>
    </div>
    <div v-if="success" class="alert alert-success">
      Connecté avec succès
    </div>
    <form action="#" @submit="onSubmit">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" class="form-control" id="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="loading">Se connecter</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: 'jane_admin',
        password: 'kitten',
        error: null,
        success: null,
        loading: false
      }
    },
    methods: {
      async onSubmit (e) {
        this.loading = true
        this.error = null
        e.preventDefault()
        try {
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })
          this.success = true
        } catch (error) {
          this.error = 'Identifiant ou mot de passe incorrect'
        }
        this.loading = false
      }
    }
  }
</script>
