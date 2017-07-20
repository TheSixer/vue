<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;

.personal {
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 286 / @pxtorem;
    background: url('../../assets/images/header-bg.png');
    background-size: 100% 100%;
    .info {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      height: 186 / @pxtorem;
      width: 100%;
      padding: 31 / @pxtorem;
      img {
        width: 121 / @pxtorem;
        height: 121 / @pxtorem;
        margin-right: 10 / @pxtorem;
      }
      .name {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        height: 100 / @pxtorem;
        .nickname {
          height: 60 / @pxtorem;
          line-height: 60 / @pxtorem;
          color: @white;
          font-size: 34 / @pxtorem;
        }
        .myId {
          height: 40 / @pxtorem;
          font-size: 26 / @pxtorem;
          color: @white;
        }
      }
    }
    .tab {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100 / @pxtorem;
      width: 100%;
      background: fade(@black, 20%);
      padding: 0 0 0 31 / @pxtorem;
      .balance {
        font-size: 32 / @pxtorem;
        color: @white;
      }
      .operation {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        height: 100 / @pxtorem;
        a {
          display: inline-block;
          height: 100 / @pxtorem;
          line-height: 100 / @pxtorem;
          padding: 0 31 / @pxtorem;
          font-size: 28 / @pxtorem;
          color: @white;
        }
      }
    }
  }
  .body {
    .items {
      background: @white;
      display: flex;
      flex-wrap: wrap;
      padding: 10 / @pxtorem 20 / @pxtorem;
      .item-tab {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 25%;
        height: 190 / @pxtorem;
        padding: 20 / @pxtorem 0;
        img {
          width: 89 / @pxtorem;
          height: 89 / @pxtorem;
        }
        span {
          text-align: center;
          margin-top: 15 / @pxtorem;
          font-size: 26 / @pxtorem;
          color: #666;
        }
      }
    }
  }
}
</style>

<template>
  <div class="personal">
    <header class="header">
      <div class="info">
        <img src="../../assets/images/userHead.png">
        <div class="name">
          <span class="nickname">一懒众衫小</span>
          <div class="myId">
            <span>ID: 12342314234</span>
            <span>美分：2000</span>
          </div>
        </div>
      </div>
      <div class="tab">
        <div class="balance">余额： ¥1000</div>
        <div class="operation">
          <router-link to="">充值</router-link>
          <router-link to="">提现</router-link>
        </div>
      </div>
    </header>

    <div class="body">
      <div class="items">
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myOrder.png">
          <span>我的订单<i></i></span>
        </router-link>
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myFollow.png">
          <span>我的关注<i></i></span>
        </router-link>
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myCollection.png">
          <span>我的收藏<i></i></span>
        </router-link>
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myActivity.png">
          <span>我的活动<i></i></span>
        </router-link>
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myVGuest.png">
          <span>我的微客<i></i></span>
        </router-link>
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myPay.png">
          <span>我的代付<i></i></span>
        </router-link>
        <router-link to="" class="item-tab">
          <img src="../../assets/images/myExchange.png">
          <span>我的兑换<i></i></span>
        </router-link>
      </div>
    </div>

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
  }
}
</script>
