<template>
  <div>
    <div class="mb-4" v-for="comment in comments">
      <strong>{{comment.author.fullName}}</strong>,
      <Timeago :datetime="comment.publishedAt" class="text-muted"></Timeago>
      <br>
      {{comment.content}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        comments: []
      }
    },
    props: {
      post: Number
    },
    async mounted () {
      const r = await this.$axios.get(`posts/${this.post}/comments`)
      this.comments = r.data
    }
  }
</script>
