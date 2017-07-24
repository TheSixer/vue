<style lang="less">
@pxtorem: 20rem;

.others-home {
  padding-bottom: 120 / @pxtorem;
  .header {
    position: relative;
    height: 280 / @pxtorem;
    overflow: hidden;
    .background {
      height: 280 / @pxtorem;
      img {
        width: 100%;
        height: auto;
        min-height: 280 / @pxtorem;
        filter: blur(3px);
      }
    }
    .header-body {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      height: 280 / @pxtorem;
      padding: 20 / @pxtorem;
      .head {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 130 / @pxtorem;
        .heade {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .rank {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 130 / @pxtorem;
            margin-right: 20 / @pxtorem;
            img {
              width: 34 / @pxtorem;
              height: 36 / @pxtorem;
              margin-right: 15 / @pxtorem;
            }
            span {
              color: #dad4a2;
              font-size: 28 / @pxtorem;
            }
          }
          .baseInfo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            img {
              width: 106 / @pxtorem;
              height: 106 / @pxtorem;
              margin-right: 20 / @pxtorem;
              border-radius: 50%;
            }
            .nickname {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              .nick {
                color: #FFFFFF;
                font-size: 28 / @pxtorem;
              }
              .myId {
                color: #FFFFFF;
                font-size: 26 / @pxtorem;
              }
            }
          }
        }
        .attention {
          button {
            width: 140 / @pxtorem;
            height: 55 / @pxtorem;
            // padding-left: 20 / @pxtorem;
            // padding-right: 20 / @pxtorem;
            border-radius: 6 / @pxtorem;
            background: #d3872c;
            color: #FFFFFF;
            font-size: 28 / @pxtorem;
            background: -webkit-linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* Firefox 3.6 - 15 */
            background: linear-gradient(#c97c20, saturate(#c97c20, 40%)); /* 标准的语法 */
          }
        }
      }
      .tickets {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 50%;
        height: 50 / @pxtorem;
        font-size: 28 / @pxtorem;
        color: #FFFFFF;
      }
      .gift {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        button {
          padding: 10 / @pxtorem 20 / @pxtorem;
          background: none;
          img {
            width: 44 / @pxtorem;
            height: 41 / @pxtorem;
          }
        }
      }
    }
  }
  .body {
    .newActivity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 136 / @pxtorem;
      width: 100%;
      padding: 20 / @pxtorem 0 20 / @pxtorem 20 / @pxtorem;
      background: #FFFFFF;
      .act-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 90%;
        height: 96 / @pxtorem;
        .act-title {
          width: 100%;
          height: 54 / @pxtorem;
          font-size: 32 / @pxtorem;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

        }
        .act-time {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 42 / @pxtorem;
          line-height: 42 / @pxtorem;
          font-size: 26 / @pxtorem;
          .time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img {
              width: 31 / @pxtorem;
              height: 31 / @pxtorem;
              margin-right: 10 / @pxtorem;
            }
            span {
              font-size: 26 / @pxtorem;
              color: #666;
            }
          }
          span {
            // padding-right: 30 / @pxtorem;
            color: #715e33;
            font-size: 26 / @pxtorem;
          }
        }
      }
      .arrow {
        width: 68 / @pxtorem;
        height: 96 / @pxtorem;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 28 / @pxtorem;
          height: 16 / @pxtorem;
          transform: rotate(-90deg);
        }
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
              width: 30%;
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
    .seeMore {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: #FFFFFF;
      border-top: 1px solid #f0f0f0;
      width: 100%;
      height: 90 / @pxtorem;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 90 / @pxtorem;
        padding: 20 / @pxtorem;
        font-size: 26 / @pxtorem;
        color: #666;
        img {
          width: 28 / @pxtorem;
          height: 16 / @pxtorem;
          transform: rotate(-90deg);
          margin-left: 10 / @pxtorem;
        }
      }
    }
    .manifesto {
      width: 100%;
      margin-top: 20 / @pxtorem;
      background: #FFFFFF;
      .mTitle {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: auto;
        height: 100 / @pxtorem;
        padding: 20 / @pxtorem;
        span {
          font-size: 28 / @pxtorem;
          color: #a28542;
          height: 35 / @pxtorem;
          line-height: 35 / @pxtorem;
          padding: 0 10 / @pxtorem;
          border-left: 5 / @pxtorem solid #a28542;
        }
      }
      .mContent {
        padding: 20 / @pxtorem;
        font-size: 28 / @pxtorem;
        color: #666;
        border-top: .5px solid #f0f0f0;
      }
    }
    .ivu-tabs-content {
      .video {
        width: 100%;
        height: 100%;
        padding: 30 / @pxtorem;
        background: #f0f0f0;
        video {
          width: 100%;
          height: auto;
        }
        p {
          font-size: 28 / @pxtorem;
          color: #666;
          text-align: center;
        }
      }
      .img-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20 / @pxtorem;
        li {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10 / @pxtorem;
          width: 50%;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .surpport {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      z-index: 999;
      button {
        width: 100%;
        height: 98 / @pxtorem;
        font-size: 32 / @pxtorem;
      }
      button.comeon {
        color: #FFFFFF;
        background: #715e33;
      }
      button.meto {
        color: #FFFFFF;
        background: #a28542;
      }
      button.lapiao {
        color: #715e33;
        background: #dad4a2;
      }
    }
  }
}
</style>

<template>
  <div class="others-home">
    <header class="header">
      <div class="background">
        <img src="../../../assets/images/home-bg.png">
      </div>
      <div class="header-body">
        <div class="head">
          <div class="heade">
            <div class="rank">
              <img src="../../../assets/images/rank03.png">
              <span>NO.{{ rank }}</span>
            </div>
            <div class="baseInfo">
              <img :src="activityMember.wxImgUrl">
              <div class="nickname">
                <span class="nick">{{ activityMember.nickName }}</span>
                <span class="myId">ID:{{ activityMember.memberId }}</span>
              </div>
            </div>
          </div>
          <div class="attention" v-if="activityMember.memberId !== memberId">
            <template v-if="!attentionStatus">
              <button @click="attention">+ 关注</button>
            </template>
            <template v-else>
              <button @click="cancleAttention">取消关注</button>
            </template>

          </div>
        </div>
        <div class="tickets">
          <span>票数：{{ activityMember.poll || 0 }}</span>
        </div>
        <div class="gift">
          <button @click="support">
            <img src="../../../assets/images/gift.png">
          </button>
        </div>
      </div>
    </header>

    <div class="body">
      <router-link :to="'/activity-detail/' + activity.id" class="newActivity">
        <div class="act-left">
          <span class="act-title">{{ activity.name }}</span>
          <div class="act-time">
            <div class="time">
              <img src="../../../assets/images/time.png">
              <span>{{ activity.beginDate | moment('YYYY/MM/DD') }}~{{ activity.endDate | moment('YYYY/MM/DD') }}</span>
            </div>
            <template v-if="activity.activityStatus === 0">
              <span>未开始</span>
            </template>
            <template v-if="activity.activityStatus === 1">
              <span>进行中...</span>
            </template>
            <template v-else>
              <span>已结束</span>
            </template>

          </div>
        </div>
        <div class="arrow">
          <img src="../../../assets/images/arrow-down.png">
        </div>
      </router-link>

      <Tabs value="name1">
          <Tab-pane label="谁为我投票" name="name1">
            <template v-if="!pollList.length">
              <p>还没有人投票，快点支持我一下吧~</p>
            </template>
            <template v-else>
              <ul class="list-items">
                <li v-for="item in pollList" :key="item.id">
                  <div class="list-item">
                    <div class="user-info">
                      <img :src="item.memberImg">
                      <span>{{ item.name }}</span>
                    </div>
                    <div class="other-info">
                      <span class="order">投了<i>{{ item.pollCount }}</i>票</span>
                      <span class="date">{{ item.createdAt | moment }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </template>
          </Tab-pane>
          <Tab-pane label="贡献榜" name="name2">
            <template v-if="!pollCountList.length">
              <p>还没有人参与活动~</p>
            </template>
            <template v-else>
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
                      <span>{{ item.name }}</span>
                    </div>
                    <div class="other-info">
                      <div class="alone">支持票数：<i>{{ item.pollCount }}</i></div>
                    </div>
                  </div>
                </li>
              </ul>
            </template>
          </Tab-pane>
      </Tabs>
      <div class="seeMore" v-if="pollCountList.length || pollList.length">
        <router-link :to="'/supporter/' + activity.id + '/' + activityMember.memberId">
          <span>查看更多</span>
          <img src="../../../assets/images/arrow-down.png">
        </router-link>
      </div>

      <div class="manifesto">
        <div class="mTitle">
          <span>参赛宣言</span>
        </div>
        <div class="mContent">
          <p>{{ activityMember.matchManifesto }}</p>
        </div>
      </div>

      <Tabs value="video">
          <Tab-pane label="参赛视频" name="video">
            <div class="video" v-if="activityMember.matchVideo">
              <video :src="baseImgUrl + activityMember.matchVideo"></video>
            </div>
            <div class="video" v-else>
              <p>未上传视频</p>
            </div>
          </Tab-pane>
          <Tab-pane label="参赛美照" name="image">
            <ul class="img-list">
              <li v-for="pickey of activityMember.matchImgList">
                <img :src="baseImgUrl + pickey">
              </li>
            </ul>
          </Tab-pane>
      </Tabs>

      <div class="surpport">
        <button class="comeon" @click="support">为TA加油</button>
        <button class="meto" @click="joinActivity" v-if="activityMember.memberId !== memberId">我也参加</button>
        <button class="lapiao">为TA拉票</button>
      </div>
    </div>

    <Gift-Modal
      :poll-member-id="activityMember.memberId"
      :activity-id="activity.id"
      :modal="modal"
      :on-close="cancleSupport">
    </Gift-Modal>
  </div>
</template>

<script>
import GiftModal from '@/components/giftModal/index'
import config from '@/config/config'
import { mapState, mapActions } from 'vuex'
import { getPersonalInfo, addAttention, cancleAttention } from '@/api/service'
export default {
  data () {
    return {
      baseImgUrl: config.qiniu.IMG_PATH,
      member: {
        nickName: '',
        parentId: '',
        poll: 0
      },
      modal: false,   //  默认隐藏模态框
      activity: {},
      activityMember: {},
      pollList: [],
      pollCountList: [],
      attentionStatus: false
    }
  },
  components: {
    GiftModal
  },
  computed: {
    ...mapState([
      'memberId'
    ]),
    rank () {
      return parseInt(this.$route.query.rank) + 1
    }
  },
  mounted () {
    this.getUserMemberId()
    this.initData()
  },
  methods: {
    ...mapActions([
      'getUserMemberId'
    ]),
    async initData () {
      await getPersonalInfo({
        otherMemberId: this.$route.params.id,
        activityId: this.$route.params.actId
      }).then(res => {
        if (res.data.code === '200') {
          const data = res.data
          data.activityMember.matchImgList = []
          data.activityMember.matchImgList = data.activityMember.matchImg.split(',')

          this.activity = res.data.activity
          this.activityMember = res.data.activityMember
          this.pollList = res.data.pollList
          this.pollCountList = res.data.pollCountList
          this.attentionStatus = res.data.attentionStatus
        } else {
          this.$Message.error({
            content: res.data.message,
            duration: 3,
            closable: true
          })
        }
      })
    },
    async attention () {
      await addAttention({
        memberAttentionId: this.activityMember.memberId
      }).then(res => {
        if (res.data.code === '200') {
          this.attentionStatus = !this.attentionStatus
          this.$Message.success('已关注！')
        } else {
          this.$Message.error(res.data.message)
        }
      })
    },
    async cancleAttention () {
      await cancleAttention({
        memberAttentionId: this.activityMember.memberId
      }).then(res => {
        if (res.data.code === '200') {
          this.attentionStatus = !this.attentionStatus
          this.$Message.success('已取消关注！')
        } else {
          this.$Message.error(res.data.message)
        }
      })
    },
    joinActivity () {
      this.$router.push({
        path: '/enroll/' + this.activity.id
      })
    },
    support () {
      this.modal = true
    },
    cancleSupport () {
      this.modal = false
    }
  }
}
</script>
