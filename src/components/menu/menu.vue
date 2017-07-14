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
  <div class="menu">
    <router-link to="" class="tab">
      <img src="../../assets/images/home.png">
      <span>首</span>
    </router-link>
    <router-link to="" class="tab">
      <img src="../../assets/images/xiu.png">
      <span>秀</span>
    </router-link>
    <router-link to="" class="tab vip">
      <img src="../../assets/images/vip.png">
      <span>会</span>
    </router-link>
    <router-link to="" class="tab">
      <img src="../../assets/images/shop.png">
      <span>购</span>
    </router-link>
    <router-link to="" class="tab active">
      <img src="../../assets/images/me.png">
      <span>我</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>
