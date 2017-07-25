<template>
     <div class="firmorder">
           <Heade title="确认订单"></Heade>
           <div class="choosestore">
                <span>选择服务门店</span><img src="../../../assets/images/rightarrow.png">
           </div>
           <div class="addresscon">
                <h2>门店名称门店名称门店名称门店名称门店名称</h2>
                <p style="color:#a28542"><img src="../../../assets/images/tel.png" class="tel">021-2283-2130</p>
                <p><img src="../../../assets/images/position.png" class="position">上海市宝山区逸仙路2816号A幢14L</p>
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
        <div class="number">
              <span>数量</span>
              <div class="numbercon">
                   <span><img src="../../../assets/images/minus.png"></span>
                   <span><input type="text" value="1"></span>
                    <span><img src="../../../assets/images/add.png"></span>
              </div>
        </div>
        <div class="account">
            <span>商品金额</span>
            <p>￥1000.00</p>
        </div>
        <div class="paybtn">
            <p>实付金额   <span><small>￥</small>1000.00</span> </p>
            <button>支付</button>
        </div>
     </div>
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF; 
.firmorder{
    .choosestore{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20 / @pxtorem;
      border-bottom: 1px solid #eaeaea;
      height:90 / @pxtorem;
      background:#fff;
      margin-top:20 / @pxtorem;
      span{
        display:block;
        font-size:28 / @pxtorem;
      }
      img{
        width:16 / @pxtorem;
        height:28 / @pxtorem;
      }
    }

    .addresscon{
        background:#fff;
        padding:10 / @pxtorem 20 / @pxtorem;
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
    .goods{
        background:#fff;
        padding:20 / @pxtorem; 
        display: flex;
        margin-top:20 / @pxtorem;
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
    .number{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20 / @pxtorem;
      background:#fff;
      height:100 / @pxtorem;
      border-bottom:1px solid #eaeaea;
      border-top:1px solid #eaeaea;
      span{
        font-size:28 / @pxtorem;
      }
      .numbercon{
        width:210 / @pxtorem;
        display: flex;
        justify-content: space-between;
        span{
          img{
            width:50 / @pxtorem;
            height:50 / @pxtorem;
            vertical-align: middle;
          }
          input{
            border:1px solid #999;
            width:80 / @pxtorem;
            height: 50 / @pxtorem;
            text-align:center;
            margin:0 5 / @pxtorem;
          }
        }
      }
    }
    .account{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20 / @pxtorem;
      background:#fff;
      height:100 / @pxtorem;
      border-bottom:1px solid #eaeaea;
      span{
        font-size:28 / @pxtorem;
      }
      p{
        font-size:32 / @pxtorem;
        color:#d16f20;
      }
    }
   .paybtn{
     position:fixed;
     bottom:0;
     left:0;
     width:100%;
     height:100 / @pxtorem;
     background:#fff;
     display:flex;
     justify-content: space-between;
     align-items: center;
     p{
       font-size:28 / @pxtorem;
       padding:0 20 / @pxtorem;
       span{
         font-size:32 / @pxtorem;
         color:#d16f20;
       }
     }
     button{
       width:30%;
       background:#dad4a2;
       font-size:28 / @pxtorem;
       height:100 / @pxtorem;
       color:#715e33;
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
