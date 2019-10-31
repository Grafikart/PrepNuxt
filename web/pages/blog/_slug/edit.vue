<template>
    <article>
      <h2>Editer l'article</h2>
      <form action="#" @submit="onSubmit">
        <div class="form-group">
          <label for="title">Titre</label>
          <input type="text" id="title" v-model="post.title" class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Modifier</button>
        </div>
      </form>
    </article>
</template>

<script>
  import Comments from '~/components/Comments'
  export default {
    middleware: 'auth',
    validate ({ params }) {
      return /^\d+$/.test(params.slug)
    },
    data () {
      return {
        post: {}
      }
    },
    head () {
      return {
        title: "Editer " + this.post.title,
      }
    },
    methods: {
      async onSubmit (e) {
        e.preventDefault()
        let r = await this.$axios.put('/posts/' + this.post.id, {
          title: this.post.title
        })
      }
    },
    async asyncData ({params, $axios}) {
      let p = params.slug.split('-')
      const id = p.pop()
      const slug = p.join('-')
      try {
        let r = await $axios.get('/posts/' + id)
        return {
          post: r.data
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
