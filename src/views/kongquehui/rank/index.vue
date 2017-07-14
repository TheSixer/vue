<style lang="less">
@pxtorem: 20rem;

.Rank {
  .header {
    position: relative;
    button {
      position: absolute;
      top: 20 / @pxtorem;
      left: 20 / @pxtorem;

      img {
        width: 21 / @pxtorem;
        height: 37 / @pxtorem;
        vertical-align: bottom;
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
      .ivu-tabs-content {
        background: #f0f0f0;
        .ivu-tabs-tabpane {
          background: #f0f0f0;
          .day-header {
            img {
              width: 100%;
              height: auto;
              vertical-align: bottom;
            }
            .list {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 20 / @pxtorem;
              background: #dad4a2;
              a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                height: 60 / @pxtorem;
                color: #715e33;
                font-size: 32 / @pxtorem;
              }
              a:first-child {
                border-right: .5px solid #b4af84;
              }
            }
          }
          .dayBody {
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
        }
      }
    }
  }
}
</style>

<template>
  <div class="Rank">
    <header class="header">
      <Tabs value="type" v-model="type">
        <Tab-pane label="日榜" name="day">
          <div class="day-header">
            <img src="../../assets/images/home-bg.png" alt="">
            <div class="list">
              <router-link to="">
                往期记录
              </router-link>
              <router-link to="">
                参与报名
              </router-link>
            </div>
          </div>
          <div class="dayBody">
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
          </div>
        </Tab-pane>
        <Tab-pane label="月榜" name="month">
          <div class="day-header">
            <img src="../../assets/images/home-bg.png" alt="">
            <div class="list">
              <router-link to="">
                往期记录
              </router-link>
              <router-link to="">
                参与报名
              </router-link>
            </div>
          </div>
          <div class="dayBody">
            <div class="others">
              <div class="top">
                <div class="info">
                  <span class="rank">NO.1</span>
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
            <div class="others">
              <div class="top">
                <div class="info">
                  <span class="rank">NO.2</span>
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
          </div>
        </Tab-pane>
      </Tabs>

      <button @click="back">
        <img src="../../assets/images/goBack.png">
      </button>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: this.$route.params.type
    }
  },
  created () {
    console.log(this.$route)
  },
  // computed: {
  //   selected: function (newVal) {
  //     this.type = newVal
  //   }
  // },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  watch: {
    selected: function (newVal) {
      this.type = newVal
    }
  }
}
</script>
