<style lang="less">
@pxtorem: 20rem;

.kongquehui {
  padding-bottom: 150 / @pxtorem;
  .banner {
    position: relative;
    width: 100%;
    height: 328 / @pxtorem;
    .swiper-container {
      .swiper-slide {
        width: 100%;
        height: 328 / @pxtorem;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          min-height: 100%;
          vertical-align: bottom;
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet-active {
          background: #FFF;
        }
      }
    }
    form {
      position: absolute;
      top: 15 / @pxtorem;
      width: 100%;
      padding: 20 / @pxtorem 60 / @pxtorem;
      z-index: 1000;
      .form-item {
        width: 100%;
        height: 65 / @pxtorem;
        input {
          width: 100%;
          height: 65 / @pxtorem;
          padding: 7 / @pxtorem 120 / @pxtorem 7 / @pxtorem 16 / @pxtorem;
          border-radius: 6 / @pxtorem;
          color: #FFF;
          font-size: 28 / @pxtorem;
          background: fade(#fff, 70%);
        }
      }
    }
  }

  .body {
    position: relative;
    .ivu-tabs {
      .ivu-tabs-bar {
        height: 90 / @pxtorem;
        background: #FFF;
        .ivu-tabs-nav-container {
          .ivu-tabs-nav-wrap {
            .ivu-tabs-nav-scroll {
              padding: 0 180 / @pxtorem 0 150 / @pxtorem;
              .ivu-tabs-nav {
                width: 100%;
                overflow-x: scroll;
                .ivu-tabs-tab {
                  height: 90 / @pxtorem;
                  line-height: 30 / @pxtorem;
                  color: #666;
                  font-size: 28 / @pxtorem;
                  font-weight: bold;
                  padding: 30 / @pxtorem 5 / @pxtorem;
                }
                .ivu-tabs-tab:last-child {
                  margin-right: 0;
                }
              }
            }
          }
        }
      }
      .ivu-tabs-content {
        .ivu-tabs-tabpane {

        }
      }
    }
    .ivu-select {
      position: absolute;
      top: 2 / @pxtorem;
      width: 145 / @pxtorem;
      height: 86 / @pxtorem;
      .ivu-select-selection {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 86 / @pxtorem;
        border: none;
        box-shadow: none;
        .ivu-select-selected-value {
          padding-left: 20 / @pxtorem;
          padding-right: 5 / @pxtorem;
          color: #666;
          font-size: 28 / @pxtorem;
          font-weight: bold;
        }
        .ivu-select-arrow {
          position: relative;
          top: 6 / @pxtorem;
          right: 0;
        }
        .ivu-icon-arrow-down-b:before {
          content: '';
          display: inline-block;
          width: 24 / @pxtorem;
          height: 13 / @pxtorem;
          background: url('../../assets/images/arrow-down.png');
          background-size: 100% 100%;
          background-position: center;
        }
      }
      .ivu-select-dropdown {
        border-radius: 0;
        padding: 0;
        background: none;
        ul {
          background: none;
          li {
            background: none;
          }
        }
        .ivu-select-item {
          height: 65 / @pxtorem;
          line-height: 41 / @pxtorem;
          text-align: center;
          color: #fff;
          font-size: 28 / @pxtorem;
          background: #bbb;
          margin-top: 1px;
        }
        .ivu-select-item-selected {
          background: #dad4a2;
          color: #715e33;
        }
      }
    }
    .rank-link {
      position: absolute;
      top: 1 / @pxtorem;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 86 / @pxtorem;
      width: 180 / @pxtorem;
      padding: 0 10 / @pxtorem;
      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 10 / @pxtorem;
        font-size: 28 / @pxtorem;
        color: #666;
        font-weight: bold;
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
    .noAct {
      font-size: 28 / @pxtorem;
      color: #666;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="kongquehui">
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in bannerList" :key="item.id">
          <img :src="baseImgUrl + item.picKey">
        </swiper-slide>
        <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>

      <form>
        <div class="form-item">
          <input class="search" name="search" placeholder="商品搜索">
        </div>
      </form>
    </div>

    <div class="body">
      <Tabs value="0" v-model="spec">
        <Tab-pane label="热门" name="0"></Tab-pane>
        <Tab-pane label="最新" name="1"></Tab-pane>
        <!-- <template v-for="(item, index) in specList" :key="item.id">
          <Tab-pane v-bind:label="item.name" v-bind:name="item.id"></Tab-pane>
        </template> -->
      </Tabs>

      <template v-if="activityList.length">
        <ul class="items">
          <li v-for="item in activityList" v-bind:key="item.name">
            <div class="item">
              <router-link :to="'/activity-detail/' + item.id">
                <div class="pic">
                  <img class="activityBg" :src="baseImgUrl + item.coverImg">
                  <template v-if="item.activityStatus === 0">
                    <img class="status" src="../../assets/images/unBegin.png">
                  </template>
                  <template v-else-if="item.activityStatus === 1">
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
                      <span>{{item.memberCount}}人</span>
                    </div>
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </router-link>
              <div class="a-info">
                <div class="a-time">
                  <img src="../../assets/images/time.png">
                  <span>{{ item.beginDate | moment('YYYY/MM/DD') }}~{{ item.endDate | moment('YYYY/MM/DD') }}</span>
                </div>
                <div class="a-address">
                  <img src="../../assets/images/position.png">
                  <span>{{ item.address }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </template>
      <template v-else>
        <p class="noAct">{{ listStatus }}</p>
      </template>

      <Select v-model="status">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>

      <div class="rank-link">
        <router-link to="">
          日榜
        </router-link>
        <router-link to="">
          月榜
        </router-link>
      </div>
    </div>

    <Guide></Guide>
  </div>
</template>

<script>
import Guide from '@/components/footer/index'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import config from '@/config/config'
import { kongquehui } from '@/api/service'
export default {
  data () {
    return {
      init: true,
      currentFlag: '0',
      baseImgUrl: config.qiniu.IMG_PATH,
      currentBanner: 0,
      status: ' ',
      spec: '',
      flag: '',
      specId: '',
      bannerList: [],
      specList: [],
      activityList: [],
      cityList: [{
        value: ' ',
        label: '全部'
      }, {
        value: '0',
        label: '未开始'
      }, {
        value: '1',
        label: '进行中'
      }, {
        value: '2',
        label: '已结束'
      }],
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      listStatus: '暂无活动信息~'
    }
  },
  components: {
    Guide,
    swiper,
    swiperSlide
  },
  mounted () {
    //  获取孔雀会首页数据
    this.getIndexInfo()
  },
  watch: {
    status (newVal) {
      this.loading()
      this.getIndexInfo()
    },
    spec (newVal) {
      this.loading()
      if (newVal !== '0' && newVal !== '1') {
        this.flag = ''
        this.specId = newVal
      } else {
        this.flag = newVal
        this.specId = ''
      }
      this.getIndexInfo()
    }
  },
  methods: {
    getIndexInfo () {
      kongquehui({
        status: this.status,
        flag: this.flag,
        specId: this.specId
      }).then(res => {
        // 请求成功，关闭loading
        this.$Message.destroy()
        let data = res.data
        if (data.code === '200') {
          // 非初始化，切换状态只改变活动列表
          for (let x in data.specList) {
            data.specList[x].id = String(data.specList[x].id)
            data.specList[x].activityList = []
          }

          if (this.init) {
            this.bannerList = data.bannerList
            this.specList = data.specList
            this.init = !this.init
          }
          this.activityList = data.activityList

          if (this.activityList.length) {
            this.listStatus = '加载中...'
          } else {
            this.listStatus = '暂无活动信息~'
          }
        }
      })
    },
    loading () {
      this.listStatus = '加载中...'
      this.$Message.loading({
        content: '正在加载中...',
        duration: 0
      })
      this.activityList = []
    }
  }
}
</script>
