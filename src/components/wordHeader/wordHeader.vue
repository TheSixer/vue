<style lang="less">
@pxtorem: 20rem;

.integral-records {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100 / @pxtorem;
    background: #fff;
    button {
      position: absolute;
      top: ((100 - 57) / 2) / @pxtorem;
      left: 15 / @pxtorem;
      background: none;
      padding: 10 / @pxtorem;
      img {
        width: 21 / @pxtorem;
        height: 37 / @pxtorem;
        vertical-align: bottom;
      }
    }
    span {
      font-size: 32 / @pxtorem;
      color: #333;
    }
  }
}

</style>

<template>
  <div class="integral-records">
    <header class="header">
      <button class="back" @click="back">
        <img src="../../assets/images/goBack.png">
      </button>
      <span>{{ title }}</span>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '孔雀会'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
