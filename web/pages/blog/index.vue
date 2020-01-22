<template>
  <div>
    <article v-for="p in posts" class="card p-4 mb-4">
      <h2>{{p.title}}</h2>
      <p>{{p.summary}}</p>
      <p>
        <nuxt-link :to="'/blog/' + p.slug + '-' + p.id" class="btn btn-primary">Lire la suite</nuxt-link>
      </p>
    </article>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posts: []
      }
    },
    head () {
      return {
        title: 'Blog',
      }
    },
    async asyncData ({$axios}) {
      let r = await $axios.get('/posts')
      return {
        posts: r.data
      }
    }
  }
</script>
