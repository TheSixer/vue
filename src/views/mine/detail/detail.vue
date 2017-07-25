<template>
      <div class="detail">
          <Heade title="商品详情"></Heade>
          <div class="banner">
                <swiper :options="swiperOption" ref="mySwiper">
                  <!-- slides -->
                  <swiper-slide v-for="(item, index) in bannerList" :key="item.id">
                    <img :src="baseImgUrl + item.picKey">
                  </swiper-slide>
                  <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
          </div>
          <div class="goodsmes">
             <h2>商品名称商品名称商品名称商品名称商品名称品名称商品名称商品名称</h2>
             <p><span class="price"><small>￥</small>1000.00</span> <span class="sale">热销300</span></p>
             <i>¥128.00</i>
          </div>
          <div class="info">
             <span>特权</span>购买后等级将升至C端美客身份
          </div>
          <div class="package">
               <div class="packagetit"><span></span>套餐</div>
               <div class="goods mt">
                    <div class="left"><img src="../../../assets/images/goods.png"></div>
                    <div class="goodstxt">
                        <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                        <div class="price">
                            <p>
                              2000美分<i>¥128.00</i>
                            </p>
                            <span>×1</span>
                        </div>
                    </div>
              </div>
              <div class="goods mt">
                    <div class="left"><img src="../../../assets/images/goods.png"></div>
                    <div class="goodstxt">
                        <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                        <div class="price">
                            <p>
                              2000美分<i>¥128.00</i>
                            </p>
                            <span>×1</span>
                        </div>
                    </div>
              </div>
              <div class="goods mt">
                    <div class="left"><img src="../../../assets/images/goods.png"></div>
                    <div class="goodstxt">
                        <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                        <div class="price">
                            <p>
                              2000美分<i>¥128.00</i>
                            </p>
                            <span>×1</span>
                        </div>
                    </div>
              </div>
          </div>
          <div class="package">
               <div class="packagetit"><span></span>赠品</div>
               <div class="goods mt">
                    <div class="left"><img src="../../../assets/images/goods.png"></div>
                    <div class="goodstxt">
                        <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                        <div class="price">
                            <p>
                              2000美分<i>¥128.00</i>
                            </p>
                            <span>×1</span>
                        </div>
                    </div>
              </div>
              <div class="goods mt">
                    <div class="left"><img src="../../../assets/images/goods.png"></div>
                    <div class="goodstxt">
                        <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                        <div class="price">
                            <p>
                              2000美分<i>¥128.00</i>
                            </p>
                            <span>×1</span>
                        </div>
                    </div>
              </div>
              <div class="goods mt">
                    <div class="left"><img src="../../../assets/images/goods.png"></div>
                    <div class="goodstxt">
                        <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                        <div class="price">
                            <p>
                              2000美分<i>¥128.00</i>
                            </p>
                            <span>×1</span>
                        </div>
                    </div>
              </div>
          </div>
          
          <Tabs value="name1">
            <Tab-pane label="详情" name="name1">标签一的内容</Tab-pane>
            <Tab-pane label="评价" name="name2">标签二的内容</Tab-pane>
         </Tabs>





          <div class="btn-group">
              <button class="share">
                <img src="../../../assets/images/share.png">
                <!-- <img src="../../../assets/images/share.png"> -->
              </button>
              <button class="follow">
                <img src="../../../assets/images/nomark.png">
                <!-- <img src="../../../assets/images/on-attention.png"> -->
              </button>
              <template v-if="matchStatus === 1 || matchStatus === 3">
                <button class="btn-join" @click="joinThisAct" :disabled="matchStatus === 2">
                  立即参与
                </button>
              </template>
              <template v-else>
                <button class="btn-join" @click="logoutXiu">
                  立即购买
                </button>
              </template>
            </div>
      </div>
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF; 
.detail{
  padding-bottom: 98 / @pxtorem;
 .banner {
    position: relative;
    width: 100%;
    height: 328 / @pxtorem;
    .swiper-container {
      .swiper-slide {
        width: 100%;
        height: 328 / @pxtorem;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          min-height: 100%;
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
  .goodsmes{
    background:#fff;
    padding:20 / @pxtorem;
    h2{
      font-weight:normal;
      font-size:28 / @pxtorem;
    }
    p{
     display: flex;
     align-items: center;
     justify-content:space-between;
     .price{
       font-size:34 / @pxtorem;
       color:#c97c20;
     }
     .sale{
       color:#999;
       font-size:28 / @pxtorem;
     }
    }
    i{
       font-size:22 / @pxtorem;
       text-decoration: line-through;
       display:block;
       font-style: italic;
     }
  }
  .info{
    background:#fff;
    height:100 / @pxtorem;
    padding:0 20 / @pxtorem; 
    display:flex;
    align-items: center;
    margin:20 / @pxtorem 0;
    font-size:28 / @pxtorem;
    color:#a28542;
    span{
      background:#dad4a2;
      color:#715e33;
      padding:5 / @pxtorem 20 / @pxtorem;
      border-radius:4 / @pxtorem;
      margin-right:10 / @pxtorem;
    }
  }
  .package{
    background:#fff;
    margin-bottom:20 / @pxtorem;
    .packagetit{
        height:100 / @pxtorem;
        border-bottom:1px solid #eaeaea;
        padding:0 20 / @pxtorem;
        color:#a28542;
        font-size:28 / @pxtorem;
        display:flex;
        align-items: center;
        span{
          width:10 / @pxtorem;
          height:40 / @pxtorem;
          display:inline-block;
          background:#a28542;
          margin-right:5 / @pxtorem;
          vertical-align: top;
        }
    }
     .goods{
        background:#fff;
        padding:20 / @pxtorem; 
        display: flex;
        border-bottom:1px solid #eaeaea;
      .left{
         width:150 / @pxtorem;
         height:150 / @pxtorem;
         img{
            width:150 / @pxtorem;
         }
      }
      .goodstxt{
          width:100%;
          padding-left: 20 / @pxtorem;
        h2{
          font-weight:normal;
          font-size:26 / @pxtorem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom:30 / @pxtorem;
        }
        .price{
          display: flex;
          justify-content: space-between;
            p{
            font-size:32 / @pxtorem;
            color:#d16f20;
              i{
                font-size: 22 / @pxtorem;
                color: #999;
                text-decoration: line-through;
                margin-left:10 / @pxtorem;
               }
          }
          span{
              font-size:32 / @pxtorem;
              color:#333;
          }
        }
      }
    }
  }
   .btn-group {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 98 / @pxtorem;
    align-items: center;
    justify-content: flex-start;
    z-index:2;
    button {
      height: 98 / @pxtorem;
      img {
        vertical-align: bottom;
      }
    }
    .share {
      width: 22%;
      background: #FFF;
      img {
        width: 49 / @pxtorem;
        height: 51 / @pxtorem;
      }
    }
    .follow {
      width: 22%;
      background: #FFF;
      img {
        width: 56 / @pxtorem;
        height: 56 / @pxtorem;
      }
    }
    .btn-join {
      width: 56%;
      color: #715e33;
      font-size: 34 / @pxtorem;
      background: #dad4a2;
      &:disabled {
        color: #999;
        background: #ddd;
      }
      img {
        width: 49 / @pxtorem;
        height: 51 / @pxtorem;
      }
    }

  }
  .ivu-tabs {
    margin-top: 20 / @pxtorem;
    .ivu-tabs-bar {
      background: #FFFFFF;
      margin-bottom: 20 / @pxtorem;
      .ivu-tabs-nav-scroll {
        display: flex;
        align-items:center;
        border-top:1px solid #eaeaea;
        .ivu-tabs-nav {
          display: inline-flex;
          width:100%;
          .ivu-tabs-ink-bar {
            background-color: #c97c20;
          }
          .ivu-tabs-tab {
            line-height: 84 / @pxtorem;
            color: #666;
            font-size: 28 / @pxtorem;
            width:50%;
            text-align:center;
           
           
          }
          .ivu-tabs-tab-active {
            color: #a28542;
          }
          .ivu-tabs-tab:active {
            color: #a28542;
          }
          .ivu-tabs-tab:hover {
            color: #a28542;
          }
          .ivu-tabs-tab:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
<script>
import Heade from '@/components/wordHeader/wordHeader'
export default {
  components: {
    Heade
  }
}
</script>
