<template>
  <div class="commodity-detail">
    <div class="body">
      <Carousel v-model="value1">
        <Carousel-item>
          <img src="../../../assets/images/home-bg.png">
        </Carousel-item>
        <Carousel-item>
          <img src="../../../assets/images/home-bg.png">
        </Carousel-item>
        <Carousel-item>
          <img src="../../../assets/images/home-bg.png">
        </Carousel-item>
        <Carousel-item>
          <img src="../../../assets/images/home-bg.png">
        </Carousel-item>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@pxtorem: 20rem;

.commodity-detail {
  .body {
    .ivu-carousel {
      img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
      }
    }
  }
}
</style>
