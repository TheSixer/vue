<template>
     <div class="artdetail">
        <Heade title="物品详情"></Heade>
        <div class="goods">
             <div class="goodsimg"><img src="../../../assets/images/goods.png"></div>
             <div class="goodstxt">
                <h2>商品名称商品名称商称商品名商称商品名称商  </h2>
             </div>
        </div>
     </div>
</template>

<style lang="less">
@pxtorem: 20rem;
.artdetail{
  .goods{
    background:#fff;
    padding:20 / @pxtorem;
    margin-top:20 / @pxtorem;
    display:flex;
    justify-content: space-between;
   .goodsimg{
      width:150 / @pxtorem;
      height:150 / @pxtorem;
     img{
       width:150 / @pxtorem;
       height:150 / @pxtorem;
     }
   }
   .goodstxt{
     width:100%;
    
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

