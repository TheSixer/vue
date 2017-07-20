<style lang="less">
@pxtorem: 20rem;

.join {
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
      background: url('../../assets/images/theOne.png') no-repeat;
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
            padding: 4 / @pxtorem;
            margin-right: 30 / @pxtorem;
            text-align: center;
            .headImg {
              width: 118 / @pxtorem;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 30 / @pxtorem;
      margin-top: 40 / @pxtorem;
      background: #fff;
      .myInfo {
        height: 90 / @pxtorem;
        line-height: 90 / @pxtorem;
        color: #333;
        font-size: 26 / @pxtorem;
      }
      button {
        width: 220 / @pxtorem;
        height: 110 / @pxtorem;
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
}
</style>

<template>
  <div class="join">
    <Heade title="参与详情"></Heade>

    <div class="body">
      <div class="first">
        <div class="rank">
          <img src="../../assets/images/rank01.png"> 1
        </div>
        <div class="info">
          <div class="head">
            <img class="headImg" src="../../assets/images/userHead.png">
            <img class="headBg" src="../../assets/images/rank-bg01.png">
          </div>
          <p class="nickname">一懒众衫小 <span>票数2800</span></p>
          <p class="manifesto">参赛宣言：</p>
          <p class="content">狭路相逢勇者胜！ oh yeah...</p>
        </div>
        <!--<button>
          <img src="../../assets/images/gift.png">
          为TA加油
        </button>-->
        <img class="win" src="../../assets/images/win.png">
      </div>
      <div class="second">
        <div class="top">
          <div class="rank">
            <img src="../../assets/images/rank02.png"> 2
          </div>
          <div class="info">
            <div class="head">
              <img class="headImg" src="../../assets/images/userHead.png">
              <img class="headBg" src="../../assets/images/rank-bg02.png">
            </div>
            <div class="info-detail">
              <span class="name">一懒众衫小</span>
              <span class="tickets">票数2600</span>
            </div>
          </div>
          <div class="support">
            <!--<button>
              <img src="../../assets/images/gift.png">
              为TA加油
            </button>-->
          </div>
          <img class="win" src="../../assets/images/win.png">
        </div>
        <p class="manifesto">参赛宣言：</p>
        <p class="content">宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容</p>
      </div>
      <div class="second">
        <div class="top">
          <div class="rank">
            <img src="../../assets/images/rank03.png"> 3
          </div>
          <div class="info">
            <div class="head">
              <img class="headImg" src="../../assets/images/userHead.png">
              <img class="headBg" src="../../assets/images/rank-bg03.png">
            </div>
            <div class="info-detail">
              <span class="name">一懒众衫小</span>
              <span class="tickets">票数2600</span>
            </div>
          </div>
          <div class="support">
            <!--<button>
              <img src="../../assets/images/gift.png">
              为TA加油
            </button>-->
          </div>
          <img class="win" src="../../assets/images/win.png">
        </div>
        <p class="manifesto">参赛宣言：</p>
        <p class="content">宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容</p>
      </div>
      <div class="others">
        <div class="top">
          <div class="info">
            <span class="rank">NO.4</span>
            <img class="headImg" src="../../assets/images/userHead.png">
            <div class="info-detail">
              <span class="name">一懒众衫小</span>
              <span class="tickets">票数2600</span>
            </div>
          </div>
          <div class="support">
            <!--<button>
              <img src="../../assets/images/gift.png">
              为TA加油
            </button>-->
          </div>
        </div>
        <p class="manifesto">参赛宣言：</p>
        <p class="content">宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容宣言内容</p>
        <img class="win" src="../../assets/images/win.png">
      </div>

      <div class="buttons">
        <div class="myInfo">
          <span>暂未参与</span>
        </div>
        <button>立即参与</button>
      </div>
    </div>

    <div class="modalBg" v-if="modal"></div>
    <div class="modal" v-if="modal">
      <Tabs value="giftBag">
        <Tab-pane label="免费票" name="free">
          <div class="content">
            <Radio-group v-model="free" type="button">
              <Radio label="1">
                <img src="../../assets/images/header-bg.png">
                <p>礼物名称</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
            </Radio-group>
          </div>
        </Tab-pane>
        <Tab-pane label="礼物" name="gift">
          <div class="content">
            <Radio-group v-model="gift" type="button">
              <Radio label="1">
                <img src="../../assets/images/header-bg.png">
                <p>礼物名称</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
              <Radio label="2">
                <img src="../../assets/images/header-bg.png">
                <p>礼物名称</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
              <Radio label="3">
                <img src="../../assets/images/header-bg.png">
                <p>礼物名称</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
              <Radio label="4">
                <img src="../../assets/images/header-bg.png">
                <p>礼物名称</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
            </Radio-group>
          </div>
        </Tab-pane>
        <Tab-pane label="礼包" name="giftBag">
          <div class="content-giftBag">
            <Radio-group v-model="giftBag" type="button">
              <Radio label="1">
                <img src="../../assets/images/header-bg.png">
                <p class="name">礼物名称</p>
                <p class="intro">礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
              <Radio label="2">
                <img src="../../assets/images/header-bg.png">
                <p class="name">礼物名称</p>
                <p class="intro">礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
              <Radio label="3">
                <img src="../../assets/images/header-bg.png">
                <p class="name">礼物名称</p>
                <p class="intro">礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
              <Radio label="4">
                <img src="../../assets/images/header-bg.png">
                <p class="name">礼物名称</p>
                <p class="intro">礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明礼物说明</p>
                <div class="giftInfo">
                  <span class="money">￥<i>5</i>.00</span>
                  <span class="ticket">+<i>1</i>票</span>
                </div>
              </Radio>
            </Radio-group>
          </div>
        </Tab-pane>
      </Tabs>

      <button>确认投票</button>
    </div>

  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
export default {
  data () {
    return {
      modal: false,
      free: '1',
      gift: '1',
      giftBag: '1'
    }
  },
  components: {
    Heade
  }
}
</script>
