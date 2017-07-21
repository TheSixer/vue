<style lang="less">
@pxtorem: 20rem;
@baseColor: #a28542;

.balance-records {
  .body {
    margin-top: 15 / @pxtorem;
    .item-img {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 140 / @pxtorem;
      padding: 20 / @pxtorem;
      margin: 15 / @pxtorem 0;
      background: #FFF;
      .item-left {
        span {
          font-size: 28 / @pxtorem;
          color: #666;
        }
      }
      .item-right {
        width: 50%;
        a {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          img {
            height: 99 / @pxtorem;
            width: 99 / @pxtorem;
            border-radius: 50%;
          }
        }
      }
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100 / @pxtorem;
      padding: 20 / @pxtorem;
      margin: 15 / @pxtorem 0;
      background: #FFF;
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
      }
      .item-left {
        span {
          font-size: 28 / @pxtorem;
          color: #666;
        }
      }
      .item-right {
        span {
          font-size: 28 / @pxtorem;
          color: #333;
        }
        img {
          width: 28 / @pxtorem;
          height: 16 / @pxtorem;
          transform: rotate(-90deg);
        }
      }
    }
  }
}

</style>

<template>
  <div class="balance-records">
    <Heade title="个人资料"></Heade>

    <div class="body">
      <div class="item-img">
        <div class="item-left">
          <span>头像</span>
        </div>
        <div class="item-right">
          <router-link to="">
            <img :src="member.wxImgUrl">
          </router-link>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <span>昵称</span>
        </div>
        <div class="item-right">
          <span>{{ member.nickName }}</span>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <span>用户ID</span>
        </div>
        <div class="item-right">
          <span>{{ member.id }}</span>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <span>身份</span>
        </div>
        <div class="item-right">
          <span>{{ member.firstName }}</span>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <span>手机号</span>
        </div>
        <div class="item-right">
          <span>{{ member.phone }}</span>
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <span>资料认证</span>
        </div>
        <div class="item-right">
          <span>{{ member.phone }}</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/mine/my-bank-card">
          <div class="item-left">
            <span>我的银行卡</span>
          </div>
          <div class="item-right">
            <img src="../../../assets/images/arrow-down.png">
          </div>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/mine/change-password">
          <div class="item-left">
            <span>修改支付密码</span>
          </div>
          <div class="item-right">
            <img src="../../../assets/images/arrow-down.png">
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import { getUserInfo } from '@/api/service'
export default {
  data () {
    return {
      member: {}
    }
  },
  components: {
    Heade
  },
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      await getUserInfo({
        memberId: '001'
      }).then(res => {
        if (res.data.code === '200') {
          this.member = res.data.member
        }
      })
    }
  }
}
</script>
