<template>
    <div class="collection">
        <Heade title="我的收藏"></Heade>

        <Tabs value="name1">
          <Tab-pane label="活动" name="name1">
            <template v-if="activityList.length">
              <ul class="items">
                <li v-for="item in activityList" v-bind:key="item.name">
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
                            <span>{{item.memberCount}}人</span>
                          </div>
                          <p>{{ item.name }}</p>
                        </div>
                      </div>
                    </router-link>
                    <div class="a-info">
                      <div class="a-time">
                        <img src="../../../assets/images/time.png">
                        <span>{{ item.beginDate | moment('YYYY/MM/DD') }}~{{ item.endDate | moment('YYYY/MM/DD') }}</span>
                      </div>
                      <div class="a-address">
                        <img src="../../../assets/images/position.png">
                        <span>{{ item.address }}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </template>
          </Tab-pane>
          <Tab-pane label="商品" name="name2">
            <ul class="list-items">
              <li v-for="item in goodsList" :key="item.id">
                <div class="goods">
                  <div class="left"><img src="/static/img/goods.89a3a36.png"></div>
                  <div class="goodstxt">
                    <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                    <div class="price">
                        <p><small>￥</small>2000美分<i>¥128.00</i></p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </Tab-pane>
        </Tabs>
    </div>
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;

.collection{
  .ivu-tabs {
    margin-top: 20 / @pxtorem;
    .ivu-tabs-bar {
      background: #FFFFFF;
      margin-bottom: 20 / @pxtorem;
      .ivu-tabs-nav-scroll {
        display: flex;
        align-items:center;
        justify-content:center;
        border-top:1px solid #eaeaea;
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
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
    .goods{
      background:#fff;
      padding:20 / @pxtorem;
      display: flex;
      margin-bottom:20 / @pxtorem;
      .left{
         width:150 / @pxtorem;
         height:150 / @pxtorem;
         img{
            width:150 / @pxtorem;
         }
      }
      .goodstxt{
          width:100%;
          padding-left: 20 / @pxtorem;
        h2{
          font-weight:normal;
          font-size:26 / @pxtorem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom:30 / @pxtorem;
        }
        .price{
          display: flex;
          justify-content: space-between;
            p{
            font-size:32 / @pxtorem;
            color:#d16f20;
              i{
                font-size: 22 / @pxtorem;
                color: #999;
                text-decoration: line-through;
                margin-left:10 / @pxtorem;
               }
          }
          span{
              font-size:32 / @pxtorem;
              color:#333;
          }
        }
      }
    }
  }
}
</style>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import { mapState, mapActions } from 'vuex'
import { myCollect } from '@/api/service'
export default {
  data () {
    return {
      goodsList: [],
      activityList: []
    }
  },
  components: {
    Heade
  },
  computed: {
    ...mapState([
      'memberId'
    ])
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
      await myCollect({
        memberId: this.memberId
      }).then(res => {
        if (res.data.code === '200') {
          this.activityList = res.data.activityList
          this.goodsList = res.data.goodsList
        }
      })
    }
  }
}
</script>
