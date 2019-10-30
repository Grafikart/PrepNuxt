<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <nuxt-link to="/" class="navbar-brand">Navbar</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <nuxt-link to="/blog" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">Blog</a>
          </nuxt-link>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">

      <div class="row">
        <div class="cold-md-8">
          <nuxt />
        </div>
        <div class="col-md-4">
          <div class="card">
            <h2>Sidebar</h2>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
