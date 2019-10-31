<template>
  <div>
    <article>
      <h2>{{p.title}}</h2>
      <div class="mb-3">
        Par {{p.author.fullName}} -
        <div class="badge badge-secondary mr-1" v-for="tag in p.tags">#{{tag.name}}</div>
        <template v-if="$auth.$state.loggedIn">
          <nuxt-link :to="'/blog/' + p.id + '/edit'" class="btn btn-primary btn-sm">Editer</nuxt-link>
        </template>
      </div>
      <div v-html="p.content"></div>
    </article>
    <hr class="my-4">
    <Comments :post="p.id"></Comments>
  </div>
</template>

<script>
  import Comments from '~/components/Comments'
  export default {
    components: {Comments},
    validate ({ params }) {
      return /^([a-z0-9]+\-)+[0-9]+$/.test(params.slug)
    },
    head () {
      return {
        title: this.p.title,
      }
    },
    async asyncData ({params, $axios}) {
      let p = params.slug.split('-')
      const id = p.pop()
      const slug = p.join('-')
      try {
        let r = await $axios.get('/posts/' + id)
        return {
          p: r.data
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
