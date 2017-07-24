<template>
  <div class="follow">
    <header class="header">
      <button id="back" class="back" @click="goBack">
        <img src="../../../assets/images/goBack.png" >
      </button>

      <input class="search" name="" value="" id="" >
      <img class="icon-search" src="../../../assets/images/search.png">
    </header>

    <Tabs value="name1">
        <Tab-pane label="我关注的" name="name1">
          <ul class="list-items">
            <li v-for="(item, index) of memberList" v-bind:key="item.id">
              <div class="list-item">
                <div class="user-info">
                  <img class="head" :src="item.attentionImg">
                  <span>{{ item.attentionName }}</span>
                  <img class="crown" src="../../../assets/images/crown.png">
                  <span class="uTab">{{ item.memberFirstName }}</span>
                </div>
                <div class="other-info">
                  <button @click="cancleAttention(item.memberId)">- 取消关注</button>
                </div>
              </div>
            </li>
          </ul>
        </Tab-pane>
        <Tab-pane label="关注我的" name="name2">
          <ul class="list-items">
            <li v-for="(item, index) of attentionList" v-bind:key="item.id">
              <div class="list-item">
                <div class="user-info">
                  <img class="head" :src="item.attentionImg">
                  <span>{{ item.attentionName }}</span>
                  <img class="crown" src="../../../assets/images/crown.png">
                  <span class="uTab">身份标签</span>
                </div>
                <div class="other-info">
                  <!-- <button>+ 关注</button> -->
                </div>
              </div>
            </li>
          </ul>
        </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
import { myAttention, cancleAttention } from '@/api/service'
export default {
  data () {
    return {
      memberList: [],
      attentionList: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      await myAttention({}).then(res => {
        if (res.data.code === '200') {
          this.memberList = res.data.memberList
          this.attentionList = res.data.attentionList
        }
      })
    },
    async cancleAttention (mId) {
      await cancleAttention({
        memberAttentionId: mId
      }).then(res => {
        if (res.data.code === '200') {
          this.$Message.success('已取消关注！')

          setTimeout(function () {
            this.initData()
          }, 1000)
        } else {
          this.$Message.error(res.data.message)
        }
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
@pxtorem: 20rem;

.follow {
  height: 100%;
  background: #f0f0f0;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10 / @pxtorem 50 / @pxtorem 10 / @pxtorem 10 / @pxtorem;
    height: 100 / @pxtorem;
    line-height: 100 / @pxtorem;
    text-align: center;
    background: #FFFFFF;
    font-size: 32 / @pxtorem;
    color: #666666;
    margin-bottom: 20 / @pxtorem;
    button.back {
      height: 60 / @pxtorem;
      padding: 11.5 / @pxtorem;
      margin-right: 30 / @pxtorem;
      background: none;
      img {
        width: 21 / @pxtorem;
        height: 37 / @pxtorem;
        vertical-align: top;
      }
    }
    input {
      height: 65 / @pxtorem;
      width: 100%;
      background: #ddd;
      padding: 4 / @pxtorem 100 / @pxtorem 4 / @pxtorem 18 / @pxtorem;
      font-size: 28 / @pxtorem;
      border-radius: 6 / @pxtorem;
    }
    .icon-search {
      position: absolute;
      top: 32 / @pxtorem;
      right: 80 / @pxtorem;
      width: 36 / @pxtorem;
      height: 36 / @pxtorem;
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
          .user-info {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .head {
              width: 89 / @pxtorem;
              height: 89 / @pxtorem;
              border-radius: 50%;
            }
            span {
              font-size: 28 / @pxtorem;
              color: #666;
              margin-left: 15 / @pxtorem;
            }
            .uTab {
              font-size: 26 / @pxtorem;
              color: #a28542;
            }
            .crown {
              width: 30 / @pxtorem;
              height: 26 / @pxtorem;
              margin-left: 15 / @pxtorem;
            }
          }
          .other-info {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
          }
          .other-info {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
              color: #a28542;
              font-size: 1.3rem;
              background: none;
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

