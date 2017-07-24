<style lang="less">
@pxtorem: 20rem;

.activity {
  .items {
    li {
      .item {
        a {
          .pic {
            position: relative;
            width: 100%;
            overflow: hidden;
            .activityBg {
              width: 100%;
              height: auto;
              vertical-align: bottom;
            }
            .status {
              position: absolute;
              top: 30 / @pxtorem;
              right: 30 / @pxtorem;
              width: 100 / @pxtorem;
              height: auto;
            }
            .act-info {
              position: absolute;
              left: 30 / @pxtorem;
              bottom: 20 / @pxtorem;
              width: 92%;
              .num {
                display: inline-flex;
                align-items: center;
                height: 65 / @pxtorem;
                border-radius: (65 / 2) / @pxtorem;
                border: 1px solid #FFF;
                padding: 0 20 / @pxtorem 0 0;
                border-left: none;
                color: #fff;
                .count {
                  height: 65 / @pxtorem;
                  width: 65 / @pxtorem;
                  border: 1px solid #Fff;
                  border-radius: (65 / 2) / @pxtorem;
                  text-align: center;
                  line-height: 24 / @pxtorem;
                  padding: 6 / @pxtorem 0;
                  margin-right: 10 / @pxtorem;
                }
                span {
                  font-size: 26 / @pxtorem;
                }
              }
              p {
                color: #FFF;
                font-size: 32 / @pxtorem;
                margin-top: 10 / @pxtorem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
        .a-info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          width: 100%;
          height: 120 / @pxtorem;
          padding: 10 / @pxtorem 30 / @pxtorem;
          background: #FFFFFF;
          .a-time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 50 / @pxtorem;
            img {
              width: 31 / @pxtorem;
              height: 31 / @pxtorem;
              margin-right: 15 / @pxtorem;
            }
            span {
              font-size: 26 / @pxtorem;
              color: #666;
            }
          }
          .a-address {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 50 / @pxtorem;
            img {
              width: 28 / @pxtorem;
              height: 35 / @pxtorem;
              margin-right: 15 / @pxtorem;
            }
            span {
              font-size: 26 / @pxtorem;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="activity">
    <Heade title="我的活动"></Heade>

    <template v-if="!activityList.length">
      <p>您还没有参与活动~</p>
    </template>
    <ul class="items">
      <li v-for="item of activityList" v-bind:key="item.name">
        <div class="item">
          <router-link :to="'/activity-detail/' + item.id">
            <div class="pic">
              <img class="activityBg" :src="baseImgUrl + item.coverImg">
              <template v-if="item.activityStatus === 0">
                <img class="status" src="../../../assets/images/unBegin.png">
              </template>
              <template v-else-if="item.activityStatus === 1">
                <img class="status" src="../../../assets/images/underway.png">
              </template>
              <template v-else>
                <img class="status" src="../../../assets/images/over.png">
              </template>

              <div class="act-info">
                <div class="num">
                  <div class="count">
                    参与<br>人数
                  </div>
                  <span>{{ item.memberCount }}人</span>
                </div>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </router-link>
          <div class="a-info">
            <div class="a-time">
              <img src="../../../assets/images/time.png">
              <span>{{ item.beginDate | moment('YYYY/MM/DD') }}~{{ item.endData | moment('YYYY/MM/DD') }}</span>
            </div>
            <div class="a-address" v-if="item.address">
              <img src="../../../assets/images/position.png">
              <span>{{ item.address }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import config from '@/config/config'
import { getMyActivity } from '@/api/service'
export default {
  data () {
    return {
      baseImgUrl: config.qiniu.IMG_PATH,
      activityList: []
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
      await getMyActivity({}).then(res => {
        if (res.data.code === '200') {
          this.activityList = res.data.activityList
        }
      })
    }
  }
}
</script>
}
</script>
