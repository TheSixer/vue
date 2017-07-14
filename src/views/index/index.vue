<style lang="less">
@pxtorem: 20rem;

.menu {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100 / @pxtorem;
  padding: 15 / @pxtorem 20 / @pxtorem 5 / @pxtorem;
  background: #FFF;
  .tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    height: 80 / @pxtorem;
    img {
      width: auto;
      height: 42 / @pxtorem;
    }
    span {
      color: #999;
      font-size: 22 / @pxtorem;
    }
  }
  .tab.vip {
    img {
      position: absolute;
      width: 89 / @pxtorem;
      height: 89 / @pxtorem;
      top: -(45 / @pxtorem);
    }
    span {
      position: absolute;
      bottom: 2.5 / @pxtorem;
    }
  }
  .tab.active {
    span {
      color: #a28542;
    }
  }
}
</style>

<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>
