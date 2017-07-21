<style lang="less">
@pxtorem: 20rem;

.confirm-order {
  padding-bottom: 120 / @pxtorem;
	.body {
    margin-top: 20 / @pxtorem;
    .items {
      margin-top: 20 / @pxtorem;
      ul {
        li {
          .item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 180 / @pxtorem;
            padding: 15 / @pxtorem 30 / @pxtorem 15 / @pxtorem 180 / @pxtorem;
            margin-bottom: 20 / @pxtorem;
            background: #fff;
            img {
              position: absolute;
              left: 30 / @pxtorem;
              width: 150 / @pxtorem;
              height: 150 / @pxtorem;
            }
            .item-info {
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
              width: 100%;
              height: 150 / @pxtorem;
              padding: 10 / @pxtorem 0 10 / @pxtorem 20 / @pxtorem;
              .name {
                color: #333;
                font-size: 26 / @pxtorem;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              .num {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                .sum {
                  .count {
                    color: #d16f20;
                    font-size: 24 / @pxtorem;
                    i {
                      font-size: 32 / @pxtorem;
                    }
                  }
                  .origin {
                    color: #999;
                    font-size: 22 / @pxtorem;
                    text-decoration: line-through;
                  }
                }
                .ti {
                  color: #333;
                  font-size: 28 / @pxtorem;
                }
              }
            }
          }
        }
      }
    }
	}
  .caculate {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100 / @pxtorem;
    background: #fff;
    font-size: 32 / @pxtorem;
    color: #d16f20;
    padding-left: 30 / @pxtorem;
    b {
      font-size: 28 / @pxtorem;
      color: #333;
    }
    i {
      font-size: 24 / @pxtorem;
    }
    button {
      width: 220 / @pxtorem;
      height: 100 / @pxtorem;
      color: #715e33;
      font-size: 32 / @pxtorem;
      background: #dad4a2;
    }
  }
}
</style>

<template>
  <div class="confirm-order">
		<Heade title="确认订单"></Heade>

		<div class="body">
      <div class="items">
        <ul>
          <li>
            <router-link to="" class="item">
              <img :src="baseImgUrl + gift.picKey">
              <div class="item-info">
                <p class="name">{{ gift.name }}</p>
                <div class="num">
                  <p class="sum">
                    <span class="count">￥<i>{{ gift.price }}</i>.00</span>
                    <!-- <span class="origin">￥128.00</span> -->
                  </p>
                  <span class="ti">+{{ gift.poll }}票</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
		</div>

    <div class="caculate">
      <span><b>总计</b> <i>￥</i>{{ gift.price }}.00</span>
      <button>支付</button>
    </div>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import config from '@/config/config'
import { voteGift } from '@/api/service'
export default {
  data () {
    return {
      baseImgUrl: config.qiniu.IMG_PATH,
      gift: {
        name: null,
        picKey: null,
        price: null
      }
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
      await voteGift({
        giftId: this.$route.query.giftId
      }).then(res => {
        if (res.data.code === '200') {
          this.gift = res.data.gift
        } else {
          this.$Message.error(res.data.message)
        }
      })
    }
  }
}
</script>
