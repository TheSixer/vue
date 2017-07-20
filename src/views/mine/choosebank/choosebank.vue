<template>
    <div class="chooseback">
         <Heade title="选择银行卡"></Heade>
         <div class="bank">
            <ul>
                 <li>
                      <h2>中国工商银行</h2>
                      <p>6221****  ****1112</p>
                 </li>
                 <li>
                      <h2>中国工商银行</h2>
                      <p>6221****  ****1112</p>
                 </li>
            </ul>
         </div>
         <div class="add-btn">
               <button>添加银行卡</button>
         </div>
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
 
  .chooseback{
      .bank{
         margin-top:60 / @pxtorem;
         padding: 20 / @pxtorem;
        li{
             background: url('../../../assets/images/bg1.png');
             background-size: 100% 100%;
             padding: 40 / @pxtorem 30 / @pxtorem;
             border-radius:6 / @pxtorem;
             height:248 / @pxtorem;
             margin-top:-60 / @pxtorem;
          h2{
             font-size:34 / @pxtorem;
             color:#fff;
             font-weight:normal;
             margin-bottom:40 / @pxtorem;
          }
          p{
           color:#fff;
           font-size:34 /@pxtorem;
          }
        }
        li:nth-child(2){
           background: url('../../../assets/images/bg.png');
           background-size: 100% 100%;
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
