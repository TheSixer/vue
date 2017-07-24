<template>
  <div class="wechat_login">
    登陆中...
  </div>
</template>

<script>
export default {
  data () {

  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      if (this.$route.params.token) {
        localStorage.setToken(this.$route.params.token)
      }
    },
    setToken () {

    }
  }
}
</script>

<style>

</style>
