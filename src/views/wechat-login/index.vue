<template>
  <div class="wechat_login">
    登陆中...
    {{token}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: ''
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      if (this.$route.params.token) {
        this.token = this.$route.params.token
        localStorage.token = this.$route.params.token
      }
    },
    setToken () {

    }
  }
}
</script>

<style>

</style>
