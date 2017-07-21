<template>
    <div class="servicestore">
         <Heade title="服务门店"></Heade>
         <div class="address">
             <div class="addresscon">
                  <h2>门店名称门店名称门店名称门店名称门店名称</h2>
                  <p style="color:#a28542"><img src="../../../assets/images/tel.png" class="tel">021-2283-2130</p>
                  <p><img src="../../../assets/images/position.png" class="position">上海市宝山区逸仙路2816号A幢14L</p>
             </div>
             <div class="addresscon">
                  <h2>门店名称门店名称门店名称门店名称门店名称</h2>
                  <p style="color:#a28542"><img src="../../../assets/images/tel.png" class="tel">021-2283-2130</p>
                  <p><img src="../../../assets/images/position.png" class="position">上海市宝山区逸仙路2816号A幢14L</p>
             </div>
         </div>
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
.servicestore{
     .address{
      padding-bottom:10 / @pxtorem;
     
      margin-top:20 / @pxtorem;
      .addresscon{
        background:#fff;
        margin-top:20 / @pxtorem;
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
