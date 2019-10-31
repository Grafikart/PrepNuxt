<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <nuxt-link to="/" class="navbar-brand">Navbar</nuxt-link>
        <ul class="navbar-nav">
          <nuxt-link to="/blog" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">Blog</a>
          </nuxt-link>
        </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="$auth.$state.loggedIn">
          <a @click="$auth.logout()">Se déconnecter</a>
        </li>
        <nuxt-link v-else to="/login" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">Se connecter</a>
        </nuxt-link>
      </ul>
    </nav>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
