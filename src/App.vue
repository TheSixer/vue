<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  beforeDestroy () {},
  methods: {}
}
</script>

<style lang="less">
	@import './style/common';
  @screenWidth: 100%;
  @screenHeight: 100%;

  .app {
    width: @screenWidth;
    min-height: @screenHeight;
    background: #f0f0f0;
  }
</style>
