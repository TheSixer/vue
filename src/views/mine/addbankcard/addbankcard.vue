<template>
       <div class="addbankcard">
            <Heade title="添加银行卡"></Heade>
            <div class="bankmes">
                 <ul>
                     <li>
                         <span>开户银行</span>
                         <div class="right">
                              <input type="text" placeholder="请输入开户银行">
                         </div>
                     </li>
                     <li>
                         <span>银行卡号</span>
                         <div class="right">
                              <input type="text" placeholder="请输入银行卡号">
                         </div>
                     </li>
                     <li>
                         <span>开户人</span>
                         <div class="right">
                              <input type="text" placeholder="请输入姓名">
                         </div>
                     </li>
                     <li>
                         <span>手机号</span>
                         <div class="right">
                              <input type="text" placeholder="请输入与银行卡绑定的手机号">
                         </div>
                     </li>
                 </ul>
            </div>
            <div class="add-btn">
               <button>确认</button>
         </div>
       </div>
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
.addbankcard{
    .bankmes{
        li{
          background:#fff;
          height:100 / @pxtorem;
          padding:0  30 / @pxtorem;
          margin-top:20 / @pxtorem;
          span{
             font-size:28 / @pxtorem;
             color:#666;
             line-height:100 / @pxtorem;
             display:block;
             float:left;
             width:20%;
          }
          .right{
             width:80%;
             float:left;
             input{ 
                width:100%;
                padding:20 / @pxtorem 30 / @pxtorem;
                height:100 / @pxtorem;
                line-height:100 / @pxtorem;
                font-size:28 / @pxtorem;
             }
          }
        }
    }
    .add-btn{
          position: fixed;
          width: 100%;
          padding: 4.5rem 1rem;
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
  }
}
</script>
