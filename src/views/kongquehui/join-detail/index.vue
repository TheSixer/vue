<style lang="less">
@pxtorem: 20rem;

.join {
  padding-bottom: 120 / @pxtorem;
  .body {
    margin-top: 20 / @pxtorem;
    .first {
      position: relative;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      padding: 30 / @pxtorem;
      background: url('../../../assets/images/theOne.png') no-repeat;
      background-color: #fff;
      background-position: top center;
      background-size: 60%;
      margin-bottom: 1px;
      .rank {
        position: absolute;
        left: 30 / @pxtorem;
        top: 30 / @pxtorem;
        display: flex;
        align-items: center;
        color: #c97c20;
        font-size: 28 / @pxtorem;
        img {
          width: 39 / @pxtorem;
          height: 42 / @pxtorem;
          margin-right: 10 / @pxtorem;
          vertical-align: bottom;
        }
      }
      .info {
        text-align: center;
        .head {
          position: relative;
          width: 189 / @pxtorem;
          height: 178 / @pxtorem;
          padding: 4 / @pxtorem;
          margin: 0 auto;
          .headImg {
            width: 135 / @pxtorem;
            height: 135 / @pxtorem;
            border-radius: 50%;
            vertical-align: bottom;
          }
          .headBg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
        }
        .nickname {
          color: #333;
          font-size: 32 / @pxtorem;
          span {
            color: #c97c20;
          }
        }
        .manifesto {
          color: #333;
          font-size: 28 / @pxtorem;
          margin-top: 20 / @pxtorem;
          margin-bottom: 10 / @pxtorem;
        }
        .content {
          color: #666;
          font-size: 28 / @pxtorem;
        }
      }
      button {
        position: absolute;
        right: 30 / @pxtorem;
        top: 50%;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        background: none;
        font-size: 22 / @pxtorem;
        color: #666;
        transform: translateY(-50%);
        img {
          width: 44 / @pxtorem;
          height: 41 / @pxtorem;
        }
      }
      .win {
        position: absolute;
        top: 30 / @pxtorem;
        right: 30 / @pxtorem;
        width: 101 / @pxtorem;
        height: 84 / @pxtorem;
      }
    }
    .second {
      position: relative;
      padding: 30 / @pxtorem;
      background: #fff;
      margin-bottom: 1px;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .rank {
          display: flex;
          align-items: center;
          color: #c97c20;
          font-size: 28 / @pxtorem;
          height: 100%;
          img {
            width: 40 / @pxtorem;
            height: 47 / @pxtorem;
            margin-right: 10 / @pxtorem;
          }
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .head {
            position: relative;
            width: 143 / @pxtorem;
            height: 157 / @pxtorem;
            margin-right: 30 / @pxtorem;
            text-align: center;
            .headImg {
              position: relative;
              left: 0.05rem;
              top: 0.05rem;
              width: 118 / @pxtorem;
              height: 118 / @pxtorem;
              border-radius: 50%;
              vertical-align: bottom;
            }
            .headBg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              width: 100%;
            }
          }
          .info-detail {
            display: flex;
            flex-direction: column;
            font-size: 28 / @pxtorem;
            .name {
              color: #333;
            }
            .tickets {
              color: #c97c20;
            }
          }
        }
        .support {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 20%;
          button {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            background: none;
            font-size: 22 / @pxtorem;
            color: #666;
            img {
              width: 44 / @pxtorem;
              height: 41 / @pxtorem;
            }
          }
        }
      }
      .manifesto {
        font-size: 28 / @pxtorem;
        color: #333;
      }
      .content {
        font-size: 28 / @pxtorem;
        color: #666;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .win {
        position: absolute;
        top: 30 / @pxtorem;
        right: 30 / @pxtorem;
        width: 101 / @pxtorem;
        height: 84 / @pxtorem;
      }
    }
    .others {
      position: relative;
      padding: 30 / @pxtorem;
      background: #fff;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .rank {
            font-size: 32 / @pxtorem;
            color: #c97c20;
            margin-right: 30 / @pxtorem;
          }
          img {
            width: 89 / @pxtorem;
            height: 89 / @pxtorem;
            margin-right: 15 / @pxtorem;
          }
          .info-detail {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-size: 28 / @pxtorem;
            .name {
              color: #333;
            }
            .tickets {
              color: #c97c20;
            }
          }
        }
        .support {
          button {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            background: none;
            font-size: 22 / @pxtorem;
            color: #666;
            img {
              width: 44 / @pxtorem;
              height: 41 / @pxtorem;
            }
          }
        }
      }
      .manifesto {
        color: #333;
        font-size: 28 / @pxtorem;
      }
      .content {
        color: #666;
        font-size: 28 / @pxtorem;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .win {
        position: absolute;
        top: 30 / @pxtorem;
        right: 30 / @pxtorem;
        width: 101 / @pxtorem;
        height: 84 / @pxtorem;
      }
    }
    .buttons {
      position: fixed;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-left: 30 / @pxtorem;
      background: #fff;
      .myInfo {
        height: 90 / @pxtorem;
        line-height: 90 / @pxtorem;
        color: #333;
        font-size: 26 / @pxtorem;
      }
      button {
        width: 220 / @pxtorem;
        height: 98 / @pxtorem;
        color: #715e33;
        background: #dad4a2;
        font-size: 26 / @pxtorem;
      }
    }
  }
  .modalBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade(#000, 30%);
  }
  .modal {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 560 / @pxtorem;
    background: fade(#000, 70%);
    animation: move-in;
    .ivu-tabs {
      .ivu-tabs-bar {
        height: 90 / @pxtorem;
        margin-bottom: 0;
        border-bottom: .5px solid #dddddd;
        .ivu-tabs-nav-scroll {
          display: flex;
          align-items: center;
          justify-content: center;
          .ivu-tabs-nav {
            .ivu-tabs-ink-bar {
              background-color: #ad985e;
            }
            .ivu-tabs-tab {
              height: 92 / @pxtorem;
              padding: 25 / @pxtorem 40 / @pxtorem;
              color: #fff;
              font-size: 32 / @pxtorem;
            }
            .ivu-tabs-tab-active {
              color: #ad985e;
            }
          }
        }
      }
      .ivu-tabs-content {
        .ivu-tabs-tabpane {
          .content {
            height: 370 / @pxtorem;
            overflow-y: scroll;
            .ivu-radio-group {
              display: flex;
              align-items: center;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: flex-start;
              .ivu-radio-wrapper {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                width: 25%;
                height: 185 / @pxtorem;
                border-top: none;
                padding: 0;
                background: none;
                img {
                  width: 100 / @pxtorem;
                  height: 100 / @pxtorem;
                }
                p {
                  color: #dad4a2;
                  font-size: 22 / @pxtorem;
                  line-height: 26 / @pxtorem;
                  padding: 5 / @pxtorem 0;
                }
                .giftInfo {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 100%;
                  padding: 0 15 / @pxtorem;
                  .money {
                    color: #d16f20;
                    font-size: 18 / @pxtorem;
                    line-height: 24 / @pxtorem;
                    i {
                      font-size: 24 / @pxtorem;
                    }
                  }
                  .ticket {
                    color: #fff;
                    font-size: 18 / @pxtorem;
                    line-height: 24 / @pxtorem;
                    i {
                      font-size: 24 / @pxtorem;
                    }
                  }
                }
              }
              .ivu-radio-wrapper:first-child {
                border-radius: 0;
              }
              .ivu-radio-wrapper:last-child {
                border-radius: 0;
              }
              .ivu-radio-wrapper-checked {
                border-color: #fff;
                background: fade(#000, 40%);
                box-shadow: none;
              }
            }
          }
          .content-giftBag {
            height: 370 / @pxtorem;
            overflow-y: scroll;
            .ivu-radio-group {
              display: flex;
              align-items: center;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: flex-start;
              .ivu-radio-wrapper {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                width: 50%;
                height: 370 / @pxtorem;
                border-top: none;
                padding: 0;
                background: none;
                img {
                  width: 100 / @pxtorem;
                  height: 100 / @pxtorem;
                }
                .name {
                  color: #dad4a2;
                  font-size: 28 / @pxtorem;
                  line-height: 26 / @pxtorem;
                  padding: 20 / @pxtorem 0 0;
                }
                .intro {
                  color: #fff;
                  font-size: 24 / @pxtorem;
                  line-height: 36 / @pxtorem;
                  padding: 0 20 / @pxtorem;
                  margin: 10 / @pxtorem 0;
                  width: 100%;
                  white-space: normal;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                }
                .giftInfo {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 100%;
                  padding: 0 20 / @pxtorem;
                  color: #d16f20;
                  .money {
                    font-size: 18 / @pxtorem;
                    line-height: 24 / @pxtorem;
                    i {
                      font-size: 24 / @pxtorem;
                    }
                  }
                  .ticket {
                    font-size: 18 / @pxtorem;
                    line-height: 24 / @pxtorem;
                    i {
                      font-size: 24 / @pxtorem;
                    }
                  }
                }
              }
              .ivu-radio-wrapper:first-child {
                border-radius: 0;
              }
              .ivu-radio-wrapper:last-child {
                border-radius: 0;
              }
              .ivu-radio-wrapper-checked {
                border-color: #fff;
                background: fade(#000, 40%);
                box-shadow: none;
              }
            }
          }
        }
      }
    }
    button {
      width: 100%;
      height: 100 / @pxtorem;
      color: #715e33;
      font-size: 32 / @pxtorem;
      background: #dad4a2;
    }
  }

  .move-enter-active {
    animation: move-in 1s;
  }
  .move-leave-active {
    animation: move-out 1s;
  }
  @keyframes move-in {
    0% {
      bottom: -560 / @pxtorem;
    }
    100% {
      bottom: 0;
    }
  }
  @keyframes move-out {
    0% {
      bottom: 0;
    }
    100% {
      bottom: -560 / @pxtorem;
    }
  }
}
</style>

<template>
  <div class="join">
    <Heade title="参与详情"></Heade>

    <div class="body">
      <template v-for="(item, index) in activityList">
        <div class="first" v-if="index === 0">
          <div class="rank">
            <img src="../../../assets/images/rank01.png"> 1
          </div>
          <div class="info">
            <div class="head">
              <img class="headImg" :src="baseImgUrl + item.matchImg">
              <img class="headBg" src="../../../assets/images/rank-bg01.png">
            </div>
            <p class="nickname">{{ item.memberName}} <span>票数 {{ item.poll || 0}}</span></p>
            <p class="manifesto">参赛宣言：</p>
            <p class="content">{{ item.matchManifesto }}</p>
          </div>
          <template v-if="activityStatus">
            <button @click="support(item.memberId)">
              <img src="../../../assets/images/gift.png">
              为TA加油
            </button>
          </template>
          <template v-if="item.prizeStatus">
            <img class="win" src="../../../assets/images/win.png">
          </template>
        </div>
        <div class="second" v-else-if="index === 1">
          <div class="top">
            <div class="rank">
              <img src="../../../assets/images/rank02.png"> {{ index + 1 }}
            </div>
            <div class="info">
              <div class="head">
                <img class="headImg" :src="baseImgUrl + item.matchImg">
                <img class="headBg" src="../../../assets/images/rank-bg02.png">
              </div>
              <div class="info-detail">
                <span class="name">{{ item.memberName }}</span>
                <span class="tickets">票数 {{ item.poll || 0 }}</span>
              </div>
            </div>
            <div class="support">
              <template v-if="activityStatus">
                <button @click="support(item.memberId)">
                  <img src="../../../assets/images/gift.png">
                  为TA加油
                </button>
              </template>
            </div>
            <template v-if="item.prizeStatus">
              <img class="win" src="../../../assets/images/win.png">
            </template>
          </div>
          <p class="manifesto">参赛宣言：</p>
          <p class="content">{{ item.matchManifesto }}</p>
        </div>
        <div class="second" v-else-if="index === 2">
          <div class="top">
            <div class="rank">
              <img src="../../../assets/images/rank03.png"> {{ index + 1 }}
            </div>
            <div class="info">
              <div class="head">
                <img class="headImg" :src="baseImgUrl + item.matchImg">
                <img class="headBg" src="../../../assets/images/rank-bg03.png">
              </div>
              <div class="info-detail">
                <span class="name">{{ item.memberName }}</span>
                <span class="tickets">票数 {{ item.poll || 0 }}</span>
              </div>
            </div>
            <div class="support">
              <template v-if="activityStatus">
                <button @click="support(item.memberId)">
                  <img src="../../../assets/images/gift.png">
                  为TA加油
                </button>
              </template>
            </div>
            <template v-if="item.prizeStatus">
              <img class="win" src="../../../assets/images/win.png">
            </template>
          </div>
          <p class="manifesto">参赛宣言：</p>
          <p class="content">{{ item.matchManifesto }}</p>
        </div>
        <div class="others" v-else>
          <div class="top">
            <div class="info">
              <span class="rank">NO.{{ index + 1 }}</span>
              <img class="headImg" :src="baseImgUrl + item.matchImg">
              <div class="info-detail">
                <span class="name">{{ item.memberName }}</span>
                <span class="tickets">票数 {{ item.poll || 0 }}</span>
              </div>
            </div>
            <div class="support">
              <template v-if="activityStatus">
                <button @click="support(item.memberId)">
                  <img src="../../../assets/images/gift.png">
                  为TA加油
                </button>
              </template>
            </div>
          </div>
          <p class="manifesto">参赛宣言：</p>
          <p class="content">{{ item.matchManifesto }}</p>
          <template v-if="item.prizeStatus">
            <img class="win" src="../../../assets/images/win.png">
          </template>
        </div>
      </template>

      <div class="buttons">
        <div class="myInfo">
          <span>暂未参与</span>
        </div>
        <button @click="joinThisAct">立即参与</button>
      </div>
    </div>

    <div class="modalBg" @click="cancleSupport" v-if="modal"></div>
    <transition name="move">
      <div class="modal" v-if="modal">
        <Tabs value="giftBag" v-model="voteType">
          <Tab-pane label="免费票" name="free">
            <div class="content">
              <Radio-group v-model="free" type="button">
                <Radio label="1">
                  <img src="../../../assets/images/header-bg.png">
                  <p>免费票</p>
                  <div class="giftInfo">
                    <span class="money">￥<i>0</i>.00</span>
                    <span class="ticket">+<i>{{ member.poll || 0}}</i>票</span>
                  </div>
                </Radio>
              </Radio-group>
            </div>
          </Tab-pane>
          <Tab-pane label="礼物" name="gift">
            <div class="content">
              <Radio-group v-model="gift" type="button">
                <Radio v-for="item in giftList" :key="item.id" :label="item.id" >
                  <img :src="baseImgUrl + item.picKey">
                  <p>{{ item.name }}</p>
                  <div class="giftInfo">
                    <span class="money">￥<i>{{ item.price }}</i>.00</span>
                    <span class="ticket">+<i>{{ item.poll }}</i>票</span>
                  </div>
                </Radio>
              </Radio-group>
            </div>
          </Tab-pane>
          <Tab-pane label="礼包" name="giftBag">
            <div class="content-giftBag">
              <Radio-group v-model="giftBag" type="button">
                <Radio v-for="item in giftBagList" :key="item.id" :label="item.id">
                  <img :src="baseImgUrl + item.picKey">
                  <p class="name">{{ item.name }}</p>
                  <p class="intro">{{ item.description }}</p>
                  <div class="giftInfo">
                    <span class="money">￥<i>{{ item.price }}</i>.00</span>
                    <span class="ticket">+<i>{{ item.poll }}</i>票</span>
                  </div>
                </Radio>
              </Radio-group>
            </div>
          </Tab-pane>
        </Tabs>

        <button @click="vote">确认投票</button>
      </div>
    </transition>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import { joinDetail, getMyPoll, voteGratis } from '@/api/service'
import config from '@/config/config'
export default {
  data () {
    return {
      baseImgUrl: config.qiniu.IMG_PATH,
      activityId: this.$route.params.id,
      activityStatus: null,
      activityList: [],
      modal: false,
      pollMemberId: null,   //  被投票者
      voteType: 'free',   //  初始化投票modal类型
      free: '',
      gift: '',
      giftBag: '',
      member: null,
      giftList: [],
      giftBagList: []
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
      await joinDetail({
        memberId: '001',
        activityId: this.activityId
      }).then(res => {
        if (res.data.code === '200') {
          this.activityStatus = res.data.activityStatus
          this.activityList = res.data.activityList
        }
      })
      //  获取免费票、礼物、礼包
      await getMyPoll({
        memberId: '001'
      }).then(res => {
        console.log(res.data)
        if (res.data.code === '200') {
          this.member = res.data.member
          this.giftList = res.data.giftList
          this.giftBagList = res.data.giftBagList
        }
      })
    },
    vote () {
      const vType = this.voteType
      if (vType === 'free') {
        this.voteFree()
      } else if (vType === 'gift') {
        this.voteGift()
      } else {
        this.voteGiftBag()
      }
    },
    voteFree () {
      if (this.member.poll === 0) {
        this.$Message.warning('免费票不足！')
        return
      }

      voteGratis({
        memberId: '001',
        pollMemberId: this.pollMemberId,
        activityId: this.activityId
      }).then(res => {
        if (res.data.code === '200') {
          this.$Message.success({
            content: res.data.message,
            duration: 3,
            closable: true
          })
        } else {
          this.$Message.error({
            content: res.data.message,
            duration: 3,
            closable: true
          })
        }
      })
    },
    voteGift () {
      if (!this.gift) {
        this.$Message.warning('请选择一个礼物！')
      } else {
        const giftId = this.gift
        this.$router.push({
          path: '/vote-gift',
          query: {
            giftId
          }
        })
      }
    },
    voteGiftBag () {
      if (!this.giftBag) {
        this.$Message.warning('请选择一个礼包！')
      } else {
        const giftBagId = this.giftBag
        this.$router.push({
          path: '/vote-giftBag',
          query: {
            giftBagId
          }
        })
      }
    },
    support (memberId) {
      this.modal = true
      this.pollMemberId = memberId
    },
    cancleSupport () {
      this.modal = false
    },
    joinThisAct () {
      this.$router.push({
        path: '/enroll/' + this.activityId
      })
    }
  }
}
</script>
