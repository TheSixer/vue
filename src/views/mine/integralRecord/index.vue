<template>
  <div class="record">
    <Heade title="美分纪录"></Heade>

    <div class="recordlist">
      <ul>
        <li v-for="item in integralLogList" :key="item.id">
            <h2>{{ item.remark }}<span>{{ item.integralChange<0?'-':'+' }}￥{{ item.integralChange<0?-item.integralChange:item.integralChange }}</span></h2>
            <p>{{ item.changeDate | moment }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
.record {
  .recordlist {
      width:100%;
      margin-top:20 / @pxtorem;
      background:#fff;
  li{
     border-bottom:1px solid #f0f0f0;
     padding:20 / @pxtorem  0;
    h2{
      padding:0  30 / @pxtorem;
      font-size:28 / @pxtorem;
      color:#a28542;
       margin-bottom:10 / @pxtorem;
      font-weight:normal;
      em{
        font-size:28 / @pxtorem;
        color:#333;
        font-style:normal;
        margin-left:10 / @pxtorem;
      }
      span{
        font-size:28 / @pxtorem;
        color:#a28542;
        float:right
      }
    }
   p{
      font-size:24 / @pxtorem;
      color:#999999;
      padding:0  30 / @pxtorem;
       span{
        font-size:24 / @pxtorem;
        color:#999;
        float:right
      }
   }
  }
  }
}
</style>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import { mapState, mapActions } from 'vuex'
import { getIntegralRecord } from '@/api/service'
export default {
  data () {
    return {
      integralLogList: []
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
      await getIntegralRecord({
        memberId: this.memberId
      }).then(res => {
        console.log(res)
        if (res.data.code === '200') {
          this.integralLogList = res.data.integralLogList
        }
      })
    }
  }
}
</script>
