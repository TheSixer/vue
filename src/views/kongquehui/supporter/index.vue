<template>
  <div class="supporter">
    <Heade title="支持者"></Heade>

    <Tabs value="name1">
        <Tab-pane label="谁为我投票" name="name1">
          <ul class="list-items">
            <li v-for="item in pollList" :key="item.id">
              <div class="list-item">
                <div class="user-info">
                  <img :src="item.memberImg">
                  <span>{{ item.memberName }}</span>
                </div>
                <div class="other-info">
                  <span class="order">投了<i>{{ item.pollCount }}</i>票</span>
                  <span class="date">{{ item.creatAt | moment('YYYY/MM/DD')}}</span>
                </div>
              </div>
            </li>
            <!-- <li>
              <div class="list-item">
                <div class="user-info">
                  <img src="../../../assets/images/userHead.png">
                  <span>Allies</span>
                </div>
                <div class="other-info">
                  <span class="order">赠送<i>海蓝之星</i>增加了<i>50</i>票</span>
                  <span class="date">2017年7月4日</span>
                </div>
              </div>
            </li> -->
          </ul>
        </Tab-pane>
        <Tab-pane label="贡献榜" name="name2">
          <ul class="list-items">
            <li v-for="(item, index) of pollCountList" v-bind:key="item.id">
              <div class="list-item">
                <div class="rank">
                  <template v-if="index === 0">
                    <img src="../../../assets/images/rank01.png">
                  </template>
                  <template v-else-if="index === 1">
                    <img src="../../../assets/images/rank02.png">
                  </template>
                  <template v-else-if="index === 2">
                    <img src="../../../assets/images/rank03.png">
                  </template>
                  <template v-else>
                    NO.
                  </template>
                  {{ index + 1 }}
                </div>
                <div class="user-info">
                  <img :src="item.memberImg">
                  <span>{{ item.memberName }}</span>
                </div>
                <div class="other-info">
                  <div class="alone">支持票数：<i>{{ item.pollCount }}</i></div>
                </div>
              </div>
            </li>
          </ul>
        </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
import Heade from '@/components/wordHeader/wordHeader'
import { getUserInfoDetail } from '@/api/service'
export default {
  data () {
    return {
      pollList: [],
      pollCountList: []
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
      await getUserInfoDetail({
        memberId: this.$route.params.userId,
        activityId: this.$route.params.id
      }).then(res => {
        if (res.data.code === '200') {
          this.pollList = res.data.pollList
          this.pollCountList = res.data.pollCountList
        }
      })
    }
  }
}
</script>

<style lang="less">
@pxtorem: 20rem;

.supporter {
  height: 100%;
  background: #f0f0f0;
  // button.back {
  //   position: absolute;
  //   top: 20 / @pxtorem;
  //   left: 20 / @pxtorem;
  //   height: 60 / @pxtorem;
  //   padding: 11.5 / @pxtorem 0;
  //   background: none;
  //   img {
  //     width: 21 / @pxtorem;
  //     height: 37 / @pxtorem;
  //     vertical-align: top;
  //   }
  // }
  // .header {
  //   height: 100 / @pxtorem;
  //   line-height: 100 / @pxtorem;
  //   text-align: center;
  //   background: #FFFFFF;
  //   font-size: 32 / @pxtorem;
  //   color: #666666;
  //   margin-bottom: 20 / @pxtorem;
  // }
  .ivu-tabs {
    margin-top: 20 / @pxtorem;
    .ivu-tabs-bar {
      margin-bottom: 0;
      background: #FFFFFF;
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
    .list-items {
      background: #FFFFFF;
      li {
        border-top: 1px solid #f0f0f0;
        .list-item {
          display: flex;
          height: 110 / @pxtorem;
          padding: 15 / @pxtorem 30 / @pxtorem;
          justify-content: space-between;
          .rank {
            display: flex;
            align-items: center;
            font-size: 32 / @pxtorem;
            color: #c97c20;
            img {
              width: 36 / @pxtorem;
              margin-right: 15 / @pxtorem;
            }
          }
          .user-info {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img {
              width: 89 / @pxtorem;
              height: 89 / @pxtorem;
              border-radius: 50%;
            }
            span {
              font-size: 28 / @pxtorem;
              color: #666;
              margin-left: 15 / @pxtorem;
            }
          }
          .other-info {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            span {
              height: 50%;
              text-align: right;
              i {
                color: #c97c20;
              }
            }
            span.order {
              font-size: 26 / @pxtorem;
              color: #666;
            }
            span.date {
              font-size: 24 / @pxtorem;
              color: #999;
            }
            .alone {
              display: flex;
              align-items: center;
              height: 100%;
              font-size: 26 / @pxtorem;
              color: #666;
              i {
                color: #c97c20;
                font-size: 32 / @pxtorem;
              }
            }
          }
        }
      }
      li:first-child {
        border-top: none;
      }
    }
  }
}
</style>

