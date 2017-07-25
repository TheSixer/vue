<template>
    <div class="payanother">
         <Heade title="支付"></Heade>
         <div class="ordermes">
             <p>订  单  号：  12001584065</p>
             <p>支付金额： <span>￥1000.00</span></p>
         </div>
        <div class="payway">
            <div class="title">
               <div class="choicepaytit"><span></span>选择支付方式</div>
               <div class="choicepay">
                   <button class="self">自付</button>
                   <button class="another">代付</button>
               </div>
            </div>
            <div class="balance" style="display:none">
                 <div class="balancecon"><img src="../../../assets/images/balance.png" class="balanceimg">余额支付（余额：<span>￥1000.00</span>）</div>
                 <div class="balancebtn"><img src="../../../assets/images/uncheck.png" class="tel"></div>
            </div>
            <div class="balance" style="display:none">
                 <div class="balancecon"><img src="../../../assets/images/weixin.png" class="balanceimg">微信支付</div>
                 <div class="balancebtn"><img src="../../../assets/images/uncheck.png" class="tel"></div>
            </div>
            
            <div class="anothercon" style="display:none">
                 <ul>
                      <li>选择代付人<img src="../../../assets/images/rightarrow.png"></li>
                      <li>输入其他代付人ID<img src="../../../assets/images/rightarrow.png"></li>
                 </ul>
            </div>
            <div class="payingagent" style="display:none">
                 <ul>
                   <li>
                       <div class="payingagentuser">
                          <img src="../../../assets/images/userimg.png" class="userimg">
                          <strong>Ally</strong>
                          <span>ID:125123400</span>
                       </div>
                      <button class="payingagentbtn">更换代付人</button>
                    </li>
                 </ul>
            </div>
            <div class="wirtepay">
                <div class="wirtepaymes">
                    <span>代付人ID</span>
                    <input type="text" placeholder="请输入代付人ID">
                </div>
                <div class="wirtepaybtn">
                   <button class="cancel">取消</button>
                   <button class="confirm">确定</button>
               </div>
            </div>
        </div>
         <div class="add-btn">
               <button>确认支付</button>
         </div>
     
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
 
  .payanother{
      .ordermes{
        background:#fff;
        padding:10 / @pxtorem 20 / @pxtorem;
        margin:20 /@pxtorem 0;
        p{
          font-size:28 / @pxtorem;
          color:#666;
          line-height:50 / @pxtorem;
          span{
             color:#d16f20;
             font-size:32 / @pxtorem;
         }
        }
      }
      .payway{
        background:#fff;
        .title{
            height:100 / @pxtorem;
            border-bottom:1px solid #eaeaea;
            padding:0 20 / @pxtorem;
            color:#a28542;
            font-size:28 / @pxtorem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            span{
              width:10 / @pxtorem;
              height:40 / @pxtorem;
              display:inline-block;
              background:#a28542;
              margin-right:5 / @pxtorem;
              vertical-align: top;
            }
          .choicepay{
             width:260 / @pxtorem;
             button{
                 width:100 / @pxtorem;
                 height:50 / @pxtorem;
                 border-radius:6 / @pxtorem;
                 background:none;
                 margin-left:20  / @pxtorem;
            }
            .self{
               border:1px solid #a28542;
               color:#715e33;
            }
            .another{
              background:#dad4a2;
              color:#715e33;
            }


          }
        }
        .balance{
          display:flex;
          align-items: center;
          height:125 / @pxtorem;
          padding:20 / @pxtorem;
          border-bottom:1px solid #eaeaea;
          .balancecon{
            width:100%;
            font-size:28 / @pxtorem;
            span{
              color:#d16f20;
              font-size:28 / @pxtorem;
            }
            .balanceimg{
              width:87 / @pxtorem;
              height:87 / @pxtorem;
              vertical-align: middle;
              margin-right:10 / @pxtorem;
            }
          }
          .balancebtn{
             width:39 / @pxtorem;
             height:39 / @pxtorem;
             img{
              width:39 / @pxtorem;
              height:39 / @pxtorem;
             }
          }
        }
      }
      .anothercon{
        li{
          height:100 / @pxtorem;
          display:flex;
          justify-content: space-between;
          align-items: center;
          padding:0 20 / @pxtorem;
          border-bottom: 1px solid #eaeaea;
          font-size:28 / @pxtorem;
          img{
            width:16 / @pxtorem;
            height:28 / @pxtorem;
          }
        }
      }
      .payingagent{
          li{
             display:flex;
             justify-content: space-between;
             align-items: center;
             padding:0 20 / @pxtorem;
             height:110  / @pxtorem;
             background:#fff;
             border-bottom:1px solid #eaeaea;
             .payingagentuser{
                width:100%;
              .userimg{
                width:88 / @pxtorem;
                height:88 / @pxtorem;
                border-radius:50%;
                vertical-align: middle;
              }
              strong{
                color:#666;
                font-size:28 / @pxtorem;
                margin:0 5 / @pxtorem;
              }
              span{
                color:#666;
                font-size:26 / @pxtorem;
              }
             }
          .payingagentbtn{
              width:180 / @pxtorem;
              height:50 / @pxtorem;
              border-radius:6 / @pxtorem;
              background:none;
              margin-left:20  / @pxtorem;
              border: 1px solid #a28542;
              color: #715e33;
             }
          }
      }
      .wirtepay{
        background:#fff;
        .wirtepaymes{
            display:flex;
            justify-content: space-between;
            align-items: center;
            height:130 / @pxtorem;
            border-bottom:1px solid #eaeaea;
            padding:0 30 / @pxtorem;
            span{
              font-size:28 / @pxtorem;
              display:block;
              width:30%;
            }
            input{
              width:70%;
              height:65 / @pxtorem;
              border:1px solid #999999;
              text-align:center;
              padding:0 10 / @pxtorem;
            }
        }
        .wirtepaybtn{
          display:flex;
          align-items: center;
          justify-content: flex-end;
          height:100 / @pxtorem;
          padding:0 30 / @pxtorem;
           button{
              width:100 / @pxtorem;
              height:50 / @pxtorem;
              border-radius:6 / @pxtorem;
              background:none;
              margin-left:20  / @pxtorem;
              font-size:28 / @pxtorem;
            }
            .cancel{
               border:1px solid #a28542;
               color:#715e33;
            }
            .confirm{
              background:#dad4a2;
              color:#715e33;
            }
        }
      }
      .add-btn{
          position: fixed;
          width: 100%;
          padding: 90 / @pxtorem 20 / @pxtorem;
          left: 0;
          bottom: 0;
        button{
          height: 90 / @pxtorem;
          width: 100%;
          font-size: 34 / @pxtorem;
          color: #715e33;
          background: #dad4a2;
          border-radius: 6 / @pxtorem;
        }
      }
  }



</style>
<script>
import Heade from '@/components/wordHeader/wordHeader'
export default {
  components: {
    Heade
  },
  data () {
    return {
      vertical: 'apple'
    }
  }
}

</script>
