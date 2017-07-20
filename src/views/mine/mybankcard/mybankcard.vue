<template>
    <div class="chooseback">
         <Heade title="我的银行卡"></Heade>
         <div class="bank">
            <ul>
                 <li>
                      <h2>中国工商银行</h2>
                      <p>6221****  ****1112</p>
                      <button type="primary" @click="modal = true">删除</button >
                 </li>
            </ul>
         </div>
         <div class="nobank">
              <p>尚未添加银行卡</p>
         </div>
         <div class="add-btn">
               <button>添加银行卡</button>
         </div>
      <Modal v-model="modal" title="" @on-ok="ok" @on-cancel="cancel">
          <p>确定删除此银行卡吗？</p>
      </Modal>
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
 
  .chooseback{
      .bank{
        
         padding: 20 / @pxtorem;
        li{
             background: url('../../../assets/images/bg1.png');
             background-size: 100% 100%;
             padding: 40 / @pxtorem 30 / @pxtorem;
             border-radius:6 / @pxtorem;
             height:248 / @pxtorem;
             position:relative;
            
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
          button{
             width:120 /@pxtorem;
             height:60 /@pxtorem;
             line-height:60 /@pxtorem;
             text-align: center;
             background:#dad4a2;
             color:#715e33;
             border-radius:6 / @pxtorem;
             font-size:28  / @pxtorem;
             position: absolute;
             right:40 / @pxtorem;
             top:30 / @pxtorem;
          }
        }
      }
      .nobank{
             margin: 30 / @pxtorem;
             background:#fff;
             border-radius:6 / @pxtorem;
             height:248 / @pxtorem;
         p{
            line-height:248 / @pxtorem;
            text-align: center;
            color:#999;
            font-size:32 / @pxtorem;
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
  },
  data () {
    return {
      modal: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    }
  }
}

</script>
