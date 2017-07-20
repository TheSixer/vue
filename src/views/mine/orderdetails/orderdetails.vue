<template>
    <div class="orderdetails">
         <Heade title="订单详情"></Heade>
         <div class="address mt">
             <div class="title">服务门店</div>
             <div class="addresscon">
                  <h2>门店名称门店名称门店名称门店名称门店名称</h2>
                  <p style="color:#a28542"><img src="../../../assets/images/tel.png" class="tel">021-2283-2130</p>
                  <p><img src="../../../assets/images/position.png" class="position">上海市宝山区逸仙路2816号A幢14L</p>
             </div>
         </div>
         <div class="goods mt">
              <div class="left"><img src="../../../assets/images/goods.png"></div>
              <div class="goodstxt">
                  <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2>
                  <div class="price">
                       <p>
                         2000美分<i>¥128.00</i>
                       </p>
                       <span>×1</span>
                  </div>
              </div>
         </div>
         <div class="ordermes mt">
             <p>订单编号：21501243320112</p>
             <p>下单时间：2017/7/20  12:30:14</p> 
             <p>商品金额：200美分</p> 
             <p>支付金额：￥0.00</p> 
             <p>美分兑换所扣美分：200美分 </p> 
             <p>支付状态：已支付</p> 
             <p>实付金额：￥0.00</p> 
             <p>支付方式：微信支付</p> 
             <p>支付时间：2017/7/20  12:30:14</p> 
         </div>
         <div class="ordermes mt">
              <p class="color">核销码：1050303060306</p>
              <p class="color">状态：已使用</p>
              <p class="color">使用门店：门店名称名称名称</p>
              <p class="color">使用时间：2017/7/20  12:30:14</p>
         </div>
         <div class="evaluatebtn">
              <button>评价</button>
         </div>
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
 .orderdetails{
    .mt{
         margin-top:20 / @pxtorem;
    }
    .address{
     padding-bottom:10 / @pxtorem;
      background:#fff;
      .title{
        height:90  / @pxtorem;
        line-height:90  / @pxtorem;
        font-size:28  / @pxtorem;
        color:#666;
        font-weight:normal;
        border-bottom: 1px solid #eaeaea;
        padding:0  20 / @pxtorem;
      }
      .addresscon{
        padding:0 20 / @pxtorem;
        h2{
          font-weight:normal;
          padding:10 / @pxtorem 0; 
        }
        p{
          padding:10 / @pxtorem 0; 
          font-size:28  / @pxtorem;
          color:#666;
          img{
              vertical-align: middle;
              margin-right: 10 / @pxtorem;
          }
          .tel{
              width:30 / @pxtorem;
              height:30  / @pxtorem;
          }
          .position{
              width:28 / @pxtorem;
              height:35  / @pxtorem;
          }
        }
      }
    }
    .goods{
        background:#fff;
        padding:20 / @pxtorem; 
        display: flex;
       
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
    .ordermes{
        background:#fff;
        padding:20 / @pxtorem;
      p{
        color:#999999;
        font-size:28 / @pxtorem;
        line-height:50  / @pxtorem;
      } 
      .color{
        color:#666; 
      }
    }
   .evaluatebtn{
       margin:80 / @pxtorem 15 / @pxtorem;
       button{
            font-size: 34 / @pxtorem;
            width: 100%;
            height:90 / @pxtorem;;
            border-radius:6 / @pxtorem;;
            color: #715e33;
            background: #dad4a2;
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
