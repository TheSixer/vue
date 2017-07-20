<template>
  <div class="easyShop">
    <form class="searchForm">
      <div class="form-item">
        <input name="" id="search" class="search" placeholder="请输入要搜索的内容" />
        <button>
          <img src="../../assets/images/search.png">
        </button>
      </div>
    </form>

    <div class="tabs">
      <button class="active">全部</button>
      <button>分类1</button>
      <button>分类2</button>
      <button>分类3</button>
      <button>分类4</button>
      <button>分类5</button>
      <button>分类6</button>
      <button>分类7</button>
      <button>分类8</button>
    </div>

    <div class="body">
      <div class="combo">
        <div class="items">
          <div class="item">
            <router-link to="/commodity-detail/1">
              <img src="../../assets/images/combo.png">
            </router-link>
            <div class="item-info">
              <p>致美超能时光机，两步穿超时光 唤醒水嫩肌肤</p>
              <div class="count">
                <div class="num">
                  <span class="price"><i>￥</i>698<i>.00</i></span>
                  <span class="original-price">￥898.00</span>
                  <span class="sales">热销 300</span>
                </div>

                <button>立即购买</button>
              </div>
            </div>
          </div>
          <div class="item">
            <router-link to="/commodity-detail/2">
              <img src="../../assets/images/combo.png">
            </router-link>
            <div class="item-info">
              <p>致美超能时光机，两步穿超时光 唤醒水嫩肌肤</p>
              <div class="count">
                <div class="num">
                  <span class="price"><i>￥</i>698<i>.00</i></span>
                  <span class="original-price">￥898.00</span>
                  <span class="sales">热销 300</span>
                </div>

                <button>立即购买</button>
              </div>
            </div>
          </div>
          <div class="item">
            <router-link to="/commodity-detail/3">
              <img src="../../assets/images/combo.png">
            </router-link>
            <div class="item-info">
              <p>致美超能时光机，两步穿超时光 唤醒水嫩肌肤</p>
              <div class="count">
                <div class="num">
                  <span class="price"><i>￥</i>698<i>.00</i></span>
                  <span class="original-price">￥898.00</span>
                  <span class="sales">热销 300</span>
                </div>

                <button>立即购买</button>
              </div>
            </div>
          </div>
          <div class="item">
            <router-link to="/commodity-detail/4">
              <img src="../../assets/images/combo.png">
            </router-link>
            <div class="item-info">
              <p>致美超能时光机，两步穿超时光 唤醒水嫩肌肤</p>
              <div class="count">
                <div class="num">
                  <span class="price"><i>￥</i>698<i>.00</i></span>
                  <span class="original-price">￥898.00</span>
                  <span class="sales">热销 300</span>
                </div>

                <button>立即购买</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Guide></Guide>
  </div>
</template>

<script>
import Guide from '@/components/footer/'
export default {
  data () {
    return {

    }
  },
  components: {
    Guide
  }
}
</script>

<style lang="less">
@pxtorem: 20rem;

.easyShop {
  padding-bottom: 150 / @pxtorem;
  .searchForm {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100 / @pxtorem;
    background: #fff;
    margin-bottom: 1px;
    padding: 0 30 / @pxtorem;
    .form-item {
      position: relative;
      width: 100%;
      height: 65 / @pxtorem;
      .search {
        width: 100%;
        height: 65 / @pxtorem;
        background: #eee;
        border-radius: 6 / @pxtorem;
        font-size: 28 / @pxtorem;
        padding: 14 / @pxtorem 150 / @pxtorem 14 / @pxtorem 20 / @pxtorem;
      }
      button {
        position: absolute;
        top: (25 / 2) / @pxtorem;
        right: 0;
        width: 140 / @pxtorem;
        height: 40 / @pxtorem;
        background: none;
        border-left: 3 / @pxtorem solid #bbb;
        img {
          width: 36 / @pxtorem;
          height: 36 / @pxtorem;
        }
      }
    }
  }
  .tabs {
    // display: flex;
    // align-items: center;
    // justify-content: flex-start;
    // flex-wrap: nowrap;
    width: 100%;
    height: 80 / @pxtorem;
    overflow-x: scroll;
    white-space: nowrap;
    background: #fff;
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      height: 80 / @pxtorem;
      padding: 0 20 / @pxtorem;
      background: none;
      font-size: 28 / @pxtorem;
      color: #333;
    }
    button.active {
      color: #a28542;
    }
  }

  .body {
    .combo {
      .items {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .item {
          width: 50%;
          margin-top: 10 / @pxtorem;
          a {
            display: block;
            width: 100%;
            height: 372 / @pxtorem;
            overflow: hidden;
            img {
              width: 100%;
              height: auto;
              min-width: 100%;
              min-height: 100%;
            }
          }
          .item-info {
            padding: 20 / @pxtorem;
            background: #FFF;
            p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              color: #333;
              font-size: 26 / @pxtorem;
            }
            .count {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              .num {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: flex-start;
                span {
                  width: 100%;
                }
                .price {
                  font-size: 32 / @pxtorem;
                  color: #d16f20;
                  i {
                    font-size: 24 / @pxtorem;
                  }
                }
                .original-price {
                  font-size: 22 / @pxtorem;
                  color: #999;
                  text-decoration: line-through;
                }
                .sales {
                  font-size: 22 / @pxtorem;
                  color: #999;
                }
              }
              button {
                width: 140 / @pxtorem;
                height: 55 / @pxtorem;
                color: #715e33;
                font-size: 28 / @pxtorem;
                background: #dad4a2;
                border-radius: 6 / @pxtorem;
              }
            }
          }
        }
      }
      .item:nth-child(odd) {
        padding-right: 5 / @pxtorem;
      }
      .item:nth-child(even) {
        padding-left: 5 / @pxtorem;
      }
    }
  }
}
</style>
