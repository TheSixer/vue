<style lang="less">
@pxtorem: 20rem;

.activity-detail {
  .body {
    .activity {
      border-top: 1px solid #f0f0f0;
      .ivu-tabs {
        .ivu-tabs-bar {
          background: #FFFFFF;
          // margin-bottom: 0;
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
                font-size: 28 / @pxtorem;
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
          background: #FFF;
          .actImg {
            position: relative;
            width: 100%;
            height: auto;
            .act {
              width: 100%;
              height: auto;
            }
            .status {
              position: absolute;
              top: 30 / @pxtorem;
              right: 30 / @pxtorem;
              width: 100 / @pxtorem;
              height: auto;
            }
          }
          .actInfo {
            padding: 20 / @pxtorem 30 / @pxtorem;
            p {
              font-size: 32 / @pxtorem;
              color: #666;
            }
            .date {
              display: flex;
              align-items: center;
              height: 50 / @pxtorem;
              img {
                width: 31 / @pxtorem;
                height: 31 / @pxtorem;
                margin-right: 10 / @pxtorem;
              }
            }
            .address {
              display: flex;
              align-items: center;
              height: 50 / @pxtorem;
              img {
                width: 28 / @pxtorem;
                height: 35 / @pxtorem;
                margin-right: 10 / @pxtorem;
              }
            }
          }
          .participator {
            padding-top: 20 / @pxtorem;
            border: .5px solid #f0f0f0;
            .top {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 30 / @pxtorem;
              .first {
                color: #333;
                font-size: 28 / @pxtorem;
                font-weight: bold;
              }
              .last {
                color: #666;
                font-size: 28 / @pxtorem;
                i {
                  color: #c97c20;
                  font-size: 32 / @pxtorem;
                }
              }
            }
            .middle {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 20 / @pxtorem 0;
              padding: 0 30 / @pxtorem;
              ul {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: row;
                width: 100%;
                li {
                  width: 20%;
                  margin-right: 10 / @pxtorem;
                  .user {
                    img {
                      width: 100%;
                    }
                  }
                }
              }
              .more {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 200 / @pxtorem;
                color: #ad985e;
                font-size: 28 / @pxtorem;
                font-weight: bold;
                img {
                  width: 26 / @pxtorem;
                  height: 19 / @pxtorem;
                  margin-left: 10 / @pxtorem;
                }
              }
            }
            .bottom {
              border-top: .5px solid #f0f0f0;
              padding: 20 / @pxtorem 30 / @pxtorem;
              p {
                width: 100%;
                color: #666;
                font-size: 28 / @pxtorem;
              }
            }
          }
        }
      }
    }

    .moreAct {
      background: none;
      margin-top: 20 / @pxtorem;
      .moreTitle {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100 / @pxtorem;
        padding: 30 / @pxtorem;
        background: #fff;
        span {
          display: inline-block;
          padding: 0 14 / @pxtorem;
          border-left: 5 / @pxtorem solid #ad985e;
          color: #ad985e;
          font-size: 28 / @pxtorem;
          font-weight: bold;
          line-height: 30 / @pxtorem;
        }
      }
      .items {
        li {
          margin-bottom: 30 / @pxtorem;
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
  }
}
</style>

<template>
  <div class="activity-detail">
    <Heade title="活动详情"></Heade>

    <div class="body">
      <div  class="activity">
        <Tabs value="detail">
          <Tab-pane label="活动详情" name="detail">
            <div class="actImg">
              <img class="act" :src="baseImgUrl + activity.coverImg">
              <img class="status" src="../../../assets/images/underway.png">
            </div>

            <div class="actInfo">
              <p>{{ activity.name }}</p>
              <div class="date">
                <img src="../../../assets/images/time.png">
                <span>{{ activity.beginDate }}~{{ activity.endDate }}</span>
              </div>
              <div class="address">
                <img src="../../../assets/images/position.png">
                <span>上海市静安区</span>
              </div>
            </div>

            <div class="participator">
              <div class="top">
                <span class="first">参与者</span>
                <span class="last">已有<i>2814</i>人参与</span>
              </div>
              <div class="middle">
                <ul>
                  <li>
                    <router-link to="" class="user">
                      <img src="../../../assets/images/userHead.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="" class="user">
                      <img src="../../../assets/images/userHead.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="" class="user">
                      <img src="../../../assets/images/userHead.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="" class="user">
                      <img src="../../../assets/images/userHead.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="" class="user">
                      <img src="../../../assets/images/userHead.png">
                    </router-link>
                  </li>
                </ul>
                <router-link to="" class="more">
                  <span>查看更多</span>
                  <img src="../../../assets/images/more.png">
                </router-link>
              </div>
              <div class="bottom">
                <p>活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容</p>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="活动规则" name="rule">标签二的内容</Tab-pane>
          <Tab-pane label="奖品说明" name="intro">标签三的内容</Tab-pane>
          <!--<Tab-pane label="获奖名单" name="rank">标签三的内容</Tab-pane>-->
        </Tabs>
      </div>

      <div class="moreAct" v-if="activityMoodList.length">
        <div class="moreTitle">
          <span>您可能感兴趣的活动</span>
        </div>

        <ul class="items">
          <li v-for="item in activityMoodList" v-bind:key="item.id">
            <div class="item">
              <router-link :to="'/activity-detail/' + item.id" key="item.id">
                <div class="pic">
                  <img class="activityBg" :src="baseImgUrl + item.coverImg">
                  <template v-if="item.status">
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
                      <span>{{ item.count }}人</span>
                    </div>
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </router-link>
              <div class="a-info">
                <div class="a-time">
                  <img src="../../../assets/images/time.png">
                  <span>{{ item.startTime }}~{{ item.endTime }}</span>
                </div>
                <div class="a-address">
                  <img src="../../../assets/images/position.png">
                  <span>{{ item.address }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import config from '@/config/config'
import { activityDetailApi } from '@/api/service'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      baseImgUrl: config.qiniu.IMG_PATH,
      activity: {
        coverImg: ''
      },
      activityMember: [],
      activityMoodList: []
    }
  },
  components: {
    Heade
  },
  created () {
    this.initData()
    console.log('1111')
  },
  computed: {

  },
  methods: {
    async initData () {
      await activityDetailApi({
        activityId: this.activityId,
        memberId: '001'
      }).then(res => {
        if (res.status === 200) {
          console.log(res.data)
          this.activity = res.data.activity
          this.activityMember = res.data.activityMember
          this.activityMoodList = res.data.activityMoodList
        }
      })
    }
  }
}
</script>
