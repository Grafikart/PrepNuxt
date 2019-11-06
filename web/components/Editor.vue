<template>
    <vue-editor v-model="content" @text-change="updateValue"></vue-editor>
</template>

<script>
  export default {
    props: {
      value: String
    },
    data () {
      return {
        content: this.value
      }
    },
    watch: {
      value (v) {
        this.content = v
      }
    },
    methods: {
      updateValue: function () {
        this.$emit('input', this.content)
      }
    }
  }
</script>
