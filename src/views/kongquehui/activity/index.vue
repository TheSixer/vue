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
    <ul class="items">
      <li v-for="item of activities" v-bind:key="item.name">
        <div class="item">
          <router-link to="">
            <div class="pic">
              <img class="activityBg" src="../../assets/images/home-bg.png">
              <template v-if="item.status">
                <img class="status" src="../../assets/images/underway.png">
              </template>
              <template v-else>
                <img class="status" src="../../assets/images/over.png">
              </template>

              <div class="act-info">
                <div class="num">
                  <div class="count">
                    参与<br>人数
                  </div>
                  <span>{{ item.count }}人</span>
                </div>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </router-link>
          <div class="a-info">
            <div class="a-time">
              <img src="../../assets/images/time.png">
              <span>{{ item.startTime }}~{{ item.endTime }}</span>
            </div>
            <div class="a-address">
              <img src="../../assets/images/position.png">
              <span>{{ item.address }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activities: [
        {
          name: '活动1活动1活动1活动1',
          status: true,
          count: 21230,
          startTime: '2017/7/5',
          endTime: '2017/9/4',
          address: '上海市宝安区'
        }, {
          name: '活动2活动2活动2活动2活动2',
          status: false,
          count: 6456,
          startTime: '2017/7/5',
          endTime: '2017/9/4',
          address: '上海市静安区'
        }, {
          name: '活动3活动3活动3活动3活动3',
          status: true,
          count: 2324,
          startTime: '2017/7/5',
          endTime: '2017/9/4',
          address: '上海市杨浦区'
        }
      ]
    }
  }
}
</script>
