<template>
  <div class="dayRecord">
    <header class="header">
      <button id="back" class="back">
        <img src="../../assets/images/goBack.png" >
      </button>
      <span>支持者</span>

      <Select v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
      </Select>
    </header>

    <div class="items">
      <ul>
        <li>
          <router-link to="rank/day" class="item-list">
            <span>2017/06/20 <b>日榜</b></span>
            <img src="../../assets/images/arrow-down.png">
          </router-link>
        </li>
        <li>
          <router-link to="" class="item-list">
            <span>2017/06/20 <b>日榜</b></span>
            <img src="../../assets/images/arrow-down.png">
          </router-link>
        </li>
        <li>
          <router-link to="" class="item-list">
            <span>2017/06/20 <b>日榜</b></span>
            <img src="../../assets/images/arrow-down.png">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityList: [
        {
          value: 'beijing',
          label: '2017/6/12'
        },
        {
          value: 'shanghai',
          label: '2017/6/13'
        },
        {
          value: 'shenzhen',
          label: '2017/6/14'
        },
        {
          value: 'hangzhou',
          label: '2017/6/15'
        },
        {
          value: 'nanjing',
          label: '2017/6/16'
        },
        {
          value: 'chongqing',
          label: '2017/6/17'
        }
      ],
      model1: 'shanghai'
    }
  }
}
</script>

<style lang="less">
@pxtorem: 20rem;

.dayRecord {
  .header {
    position: relative;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 100 / @pxtorem;
    line-height: 100 / @pxtorem;
    text-align: center;
    background: #FFFFFF;
    font-size: 32 / @pxtorem;
    color: #666666;
    margin-bottom: 20 / @pxtorem;
    button.back {
      height: 60 / @pxtorem;
      padding: 11.5 / @pxtorem 15 / @pxtorem;
      margin-left: 5 / @pxtorem;
      background: none;
      img {
        width: 21 / @pxtorem;
        height: 37 / @pxtorem;
        vertical-align: top;
      }
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .ivu-select.ivu-select-single {
      width: 200 / @pxtorem !important;
      margin-right: 10 / @pxtorem;
      .ivu-select-selection {
        box-shadow: none;
        border: none;
        .ivu-icon-arrow-down-b:before {
          content: '';
          display: inline-block;
          width: 28 / @pxtorem;
          height: 16 / @pxtorem;
          background-image: url('../../assets/images/arrow-down.png');
          background-size: 100%;
        }
        .ivu-select-selected-value {
          padding-right: 54 / @pxtorem;
          font-size: 28 / @pxtorem;
          color: #666;
        }
      }
    }
  }
  .items{
    ul{
      li {
        margin-bottom: 20 / @pxtorem;
        .item-list {
          font-size: 28 / @pxtorem;
          color: #666;
          display: flex;
          align-items: center;
          padding: 0 20 / @pxtorem;
          height: 100 / @pxtorem;
          background: #FFFFFF;
          justify-content: space-between;
          span {
            b {
              color: #333;
            }
          }
          img {
            width: 28 / @pxtorem;
            height: 16 / @pxtorem;
            transform: rotate(-90deg);
          }
        }
      }
    }
  }
}
</style>
