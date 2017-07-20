<template>
  <div class="commodity-detail">
    <div class="body">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img src="../../../assets/images/home-bg.png">
        </swiper-slide>
        <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      bannerList: [{
        id: 1,
        name: 'action01'
      }, {
        id: 2,
        name: 'action02'
      }, {
        id: 3,
        name: 'action03'
      }, {
        id: 4,
        name: 'action04'
      }],
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {

  }
}
</script>

<style lang="less">
@pxtorem: 20rem;

.commodity-detail {
  .body {
    .swiper-container {
      .swiper-slide {
        img {
          width: 100%;
          height: auto;
          vertical-align: bottom;
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet-active {
          background: #FFF;
        }
      }
    }
  }
}
</style>
