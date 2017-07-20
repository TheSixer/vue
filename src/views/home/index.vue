<style lang="less">
@pxtorem: 20rem;

.home {
  padding-bottom: 150 / @pxtorem;
  .banner {
    position: relative;
    width: 100%;
    height: 400 / @pxtorem;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
      min-height: 400 / @pxtorem;
    }
    form {
      position: absolute;
      top: 15 / @pxtorem;
      width: 100%;
      padding: 20 / @pxtorem 60 / @pxtorem;
      .form-item {
        width: 100%;
        height: 65 / @pxtorem;
        input {
          width: 100%;
          height: 65 / @pxtorem;
          padding: 7 / @pxtorem 120 / @pxtorem 7 / @pxtorem 16 / @pxtorem;
          border-radius: 6 / @pxtorem;
          color: #FFF;
          font-size: 28 / @pxtorem;
          background: fade(#fff, 70%);
        }
      }
    }
  }
  .module-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100 / @pxtorem;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    padding: 20 / @pxtorem 30 / @pxtorem;
    h4 {
      font-size: 32 / @pxtorem;
      // font-weight: normal;
    }
    a {
      color: #666;
      font-size: 24 / @pxtorem;
      img {
        width: 26 / @pxtorem;
        height: 19 / @pxtorem;
      }
    }
  }
  .hot-activity {
    .hot-content {
      padding: 25 / @pxtorem;
      margin-bottom: 20 / @pxtorem;
      background: #FFF;
      .distribution {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 10 / @pxtorem;
        .bigPic {
          position: relative;
          width: 415 / @pxtorem;
          height: 290 / @pxtorem;
          margin: 0 5 / @pxtorem;
          overflow: hidden;
          border-radius: 6 / @pxtorem;
          img {
            position: absolute;
            width: auto;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .dis-small {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          width: 295 / @pxtorem;
          height: 290 / @pxtorem;
          margin: 0 5/ @pxtorem;
          a {
            position: relative;
            display: inline-block;
            width: 100%;
            height: 140 / @pxtorem;
            overflow: hidden;
            border-radius: 6 / @pxtorem;
            img {
              position: absolute;
              width: auto;
              height: 100%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          a:last-child {
            margin-top: 10 / @pxtorem;
          }
        }
      }
    }
  }

  .ladies {
    background: #fff;
    padding: 20 / @pxtorem 30 / @pxtorem;
    margin-bottom: 20 / @pxtorem;
    .items {
      display: flex;
      flex-wrap: wrap;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 25%;
        img {
          width: 112 / @pxtorem;
          height: 112 / @pxtorem;
        }
        span {
          color: #666;
          font-size: 26 / @pxtorem;
          padding: 10 / @pxtorem 0 20 / @pxtorem;
        }
      }
    }
  }
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
  .ivu-tabs {
    background: #FFFFFF;
    .ivu-tabs-bar {
      margin-bottom: 0;
      .ivu-tabs-nav-scroll {
        display: flex;
        align-items:center;
        justify-content:center;
        .ivu-tabs-nav {
          display: inline-flex;
          .ivu-tabs-ink-bar {
            background-color: #c97c20;
          }
          .ivu-tabs-tab {
            // margin-right: 148 / @pxtorem;
            font-weight: bold;
            padding: 15 / @pxtorem;
            line-height: 84 / @pxtorem;
            color: #666;
            font-size: 32 / @pxtorem;
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
    .ivu-tabs-tabpane {
      background: #f0f0f0;
    }
  }

  .tab-items {
    .tab-item {
      padding: 10 / @pxtorem 0 0;
      margin-bottom: 20 / @pxtorem;
      background: #fff;
      .item-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10 / @pxtorem 30 / @pxtorem;
        .info-left {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          img {
            width: 100 / @pxtorem;
            height: 100 / @pxtorem;
            margin-right: 20 / @pxtorem;
          }
          .info-detail {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            color: #666;
            span {
              width: 100%;
            }
            .name {
              font-size: 28 / @pxtorem;
              i {
                display: inline-block;
                font-size: 20 / @pxtorem;
                padding: 4 / @pxtorem 12 / @pxtorem;
                background: #dad4a2;
                color: #715e33;
                border-radius: 4 / @pxtorem;
              }
            }
            .time {
              font-size: 24 / @pxtorem;
            }
          }
        }
        button {
          width: 140 / @pxtorem;
          height: 55 / @pxtorem;
          font-size: 28 / @pxtorem;
          color: #fff;
          border-radius: 6 / @pxtorem;
          background: -webkit-linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* Firefox 3.6 - 15 */
          background: linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* 标准的语法 */
        }
      }
      p {
        padding: 10 / @pxtorem 30 / @pxtorem;
        width: 100%;
        font-size: 32 / @pxtorem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
      }
      .edit {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 90 / @pxtorem;
        padding: 10 / @pxtorem 0 10 / @pxtorem 30 / @pxtorem;
        span {
          color: #a28542;
          font-size: 26 / @pxtorem;
          width: 50%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .btn-group {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50%;
          height: 70 / @pxtorem;
          button {
            width: 100%;
            height: 70 / @pxtorem;
            background: none;
            color: #666;
            font-size: 26 / @pxtorem;
          }
          .support {
            img {
              width: 43 / @pxtorem;
              height: 44 / @pxtorem;
              vertical-align: bottom;
            }
          }
          .gift {
            img {
              width: 44 / @pxtorem;
              height: 41 / @pxtorem;
              vertical-align: bottom;
            }
          }
          .message {
            img {
              width: 43 / @pxtorem;
              height: 43 / @pxtorem;
              vertical-align: bottom;
            }
          }
        }
      }
    }
  }
}

</style>

<template>
  <div class="home">
    <div class="banner">
      <img src="../../assets/images/home-bg.png">
      <form>
        <div class="form-item">
          <input class="search" name="search" placeholder="商品搜索">
        </div>
      </form>
    </div>

    <div class="module-title">
      <h4>热门活动</h4>
      <router-link to="">
        <span>更多</span>
        <img src="../../assets/images/more.png">
      </router-link>
    </div>

    <div class="hot-activity">
      <div class="hot-content">
        <div class="distribution">
          <router-link class="bigPic" to="">
            <img src="../../assets/images/home-bg.png">
            <span class="">月榜</span>
            <span class="s-title">美丽日记</span>
          </router-link>
          <div class="dis-small">
            <router-link to="">
              <img src="../../assets/images/act-month01.png">
              <span class="">月榜</span>
              <span class="s-title">美丽日记</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/images/act-month02.png">
              <span class="">月榜</span>
              <span class="s-title">美丽日记</span>
            </router-link>
          </div>
        </div>

        <div class="distribution">
          <div class="dis-small">
            <router-link to="">
              <img src="../../assets/images/act-month01.png">
              <span class="">月榜</span>
              <span class="s-title">美丽日记</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/images/act-month02.png">
              <span class="">月榜</span>
              <span class="s-title">美丽日记</span>
            </router-link>
          </div>
          <router-link class="bigPic" to="">
            <img src="../../assets/images/home-bg.png">
            <span class="">月榜</span>
            <span class="s-title">美丽日记</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="module-title">
      <h4>致美女神</h4>
      <router-link to="">
        <span>更多</span>
        <img src="../../assets/images/more.png">
      </router-link>
    </div>

    <div class="ladies">
      <div class="items">
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
        <router-link to="" class="item">
          <img src="../../assets/images/userHead.png">
          <span>致美美咖</span>
        </router-link>
      </div>
    </div>

    <div class="module-title">
      <h4>美美套餐</h4>
      <router-link to="">
        <span>更多</span>
        <img src="../../assets/images/more.png">
      </router-link>
    </div>

    <div class="combo">
      <div class="items">
        <div class="item">
          <router-link to="">
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
          <router-link to="">
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
          <router-link to="">
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
          <router-link to="">
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

    <Tabs value="hot">
      <Tab-pane label="热门" name="hot">
        <div class="tab-items">
          <div class="tab-item">
            <div class="item-info">
              <div class="info-left">
                <img src="../../assets/images/userHead.png" alt="">
                <div class="info-detail">
                  <span class="name">一懒众衫小 <i>身份标签</i></span>
                  <span class="time">15分钟前</span>
                </div>
              </div>
              <button>+ 关注</button>
            </div>
            <p>标题文字</p>
            <img src="../../assets/images/home-bg.png" alt="">
            <div class="edit">
              <span>黄瓜 X 1 增加了1C</span>
              <div class="btn-group">
                <button class="support">
                  <img src="../../assets/images/support-y.png"> 12
                </button>
                <button class="gift">
                  <img src="../../assets/images/gift.png">
                </button>
                <button class="message">
                  <img src="../../assets/images/message.png">
                </button>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div class="item-info">
              <div class="info-left">
                <img src="../../assets/images/userHead.png" alt="">
                <div class="info-detail">
                  <span class="name">一懒众衫小 <i>身份标签</i></span>
                  <span class="time">15分钟前</span>
                </div>
              </div>
              <button>+ 关注</button>
            </div>
            <p>标题文字</p>
            <img src="../../assets/images/home-bg.png" alt="">
            <div class="edit">
              <span>黄瓜 X 1 增加了1C</span>
              <div class="btn-group">
                <button class="support">
                  <img src="../../assets/images/support-y.png"> 12
                </button>
                <button class="gift">
                  <img src="../../assets/images/gift.png">
                </button>
                <button class="message">
                  <img src="../../assets/images/message.png">
                </button>
              </div>
            </div>
          </div>
        </div>
      </Tab-pane>
      <Tab-pane label="美屏" name="screen">标签二的内容</Tab-pane>
      <Tab-pane label="美态" name="style">标签三的内容</Tab-pane>
      <Tab-pane label="美经" name="experience">标签二的内容</Tab-pane>
      <Tab-pane label="美答" name="anster">标签三的内容</Tab-pane>
    </Tabs>

    <Guide></Guide>
  </div>
</template>

<script>
import Guide from '@/components/footer/index'
export default {
  data () {
    return {

    }
  },
  components: {
    Guide
  },
  created () {

  }
}
</script>
