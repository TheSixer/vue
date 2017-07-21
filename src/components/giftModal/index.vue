<template>
  <div class="giftModal">
    <div class="modalBg" @click="close" v-if="modal"></div>
    <transition name="move">
      <div class="modal" v-if="modal">
        <Tabs value="giftBag" v-model="voteType">
          <Tab-pane label="免费票" name="free">
            <div class="content">
              <Radio-group v-model="free" type="button">
                <Radio label="1">
                  <img src="../../assets/images/header-bg.png">
                  <p>免费票</p>
                  <div class="giftInfo">
                    <span class="money">￥<i>0</i></span>
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
                    <span class="money">￥<i>{{ item.price }}</i></span>
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
                    <span class="money">￥<i>{{ item.price }}</i></span>
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
import { mapState } from 'vuex'
import { getMyPoll, voteGratis } from '@/api/service'
import config from '@/config/config'
export default {
  props: {
    // memberId: {
    //   type: String
    // },
    pollMemberId: {
      type: String
    },
    activityId: {
      type: String
    },
    modal: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    }
  },
  data () {
    return {
      baseImgUrl: config.qiniu.IMG_PATH,
      voteType: 'free',   //  初始化投票modal类型
      free: '',
      gift: '',
      giftBag: ''
    }
  },
  computed: {
    ...mapState([
      'memberId'
    ])
  },
  mounted () {
    let that = this
    //  防止memberId还未取到
    setTimeout(function () {
      that.initData()
    })
  },
  methods: {
    async initData () {
      //  获取免费票、礼物、礼包
      await getMyPoll({
        memberId: this.memberId
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
            content: '投票成功！',
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
    close () {
      this.onClose()
    }
  }
}
</script>

<style lang="less">
@pxtorem: 20rem;

.giftModal {
  .modalBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade(#000, 30%);
    z-index: 999;
  }
  .modal {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 560 / @pxtorem;
    background: fade(#000, 70%);
    animation: move-in;
    z-index: 1000;
    .ivu-tabs {
      background: none;
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
              line-height: 42 / @pxtorem;
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
    animation: move-in .5s;
  }
  .move-leave-active {
    animation: move-out .5s;
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
