<template>
  <div class="record">
    <Heade title="余额纪录"></Heade>
       <div class="recordlist">
         <ul>
           <li>
                <h2>充值<span>+￥100</span></h2>
                <p>2016-12-25  12:12:20</p>
            </li>
            <li>
                <h2>提现<span>+￥100</span></h2>
                <p>2016-12-25  12:12:20</p>
            </li>
            <li>
                <h2>充值<em>商品名称</em><span>+￥100</span></h2>
                <p>2016-12-25  12:12:20 <span>订单号：50221340221</span></p>
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
export default {
  components: {
    Heade
  }
}
</script>
