<template>
    <div class="userrelations">
         <Heade title="用户关系"></Heade>
         <div class="search">
             <div class="search-input"><input type="text" placeholder="输入用户ID/昵称"></div> 
             <div class="search-btn">
                 <button>身份筛选</button>
             </div> 
         </div>
         <div class="myuser">
              <div class="title">我的上级</div>
              <div class="item">
                   <div class="itemleft">
                        <img src="../../../assets/images/userimg.png" class="userimg">
                        <strong>Ally</strong>
                        <span>ID:125123400</span>
                   </div>
                   <div class="itemright">
                        <img src="../../../assets/images/crown.png" class="crown">
                        <span>身份标签</span>
                   </div>
              </div>
         </div>
         <div class="myuser">
              <div class="title">我的下级</div>
              <div class="item">
                   <div class="itemleft">
                        <img src="../../../assets/images/userimg.png" class="userimg">
                        <strong>Ally</strong>
                        <span>ID:125123400</span>
                   </div>
                   <div class="itemright">
                        <img src="../../../assets/images/crown.png" class="crown">
                        <span>身份标签</span>
                   </div>
              </div>
              <div class="item">
                   <div class="itemleft">
                        <img src="../../../assets/images/userimg.png" class="userimg">
                        <strong>Ally</strong>
                        <span>ID:125123400</span>
                   </div>
                   <div class="itemright">
                        <img src="../../../assets/images/crown.png" class="crown">
                        <span>身份标签</span>
                   </div>
              </div>
              <div class="item">
                   <div class="itemleft">
                        <img src="../../../assets/images/userimg.png" class="userimg">
                        <strong>Ally</strong>
                        <span>ID:125123400</span>
                   </div>
                   <div class="itemright">
                        <img src="../../../assets/images/crown.png" class="crown">
                        <span>身份标签</span>
                   </div>
              </div>
         </div>
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
.userrelations{
  .search{
    border-top:1px solid #eaeaea;
    background:#fff;
    padding:20 / @pxtorem; 
    display: flex;
    align-items: center;
    .search-btn{
       width:30%;
      button{
        background:none;
        font-size:28 / @pxtorem;
        color:#a28542;
        padding-left:20 / @pxtorem;;
      }
    }
    .search-input{
      width:100%;
      input{ 
        font-size:28 / @pxtorem;
        width:100%;
        background:#eee;
        height:60 / @pxtorem; 
        border-radius:6 / @pxtorem; 
        padding:0 10 / @pxtorem;
        text-align:center
       }
    }
  }
  .myuser{
    .title{
      padding:0 20 / @pxtorem;
      font-size:32 / @pxtorem;
      color:#a28542;
      height:90 / @pxtorem; 
      line-height:90 / @pxtorem; 
    }
    .item{
       padding:0 20 / @pxtorem;
       height:110  / @pxtorem;
       background:#fff;
       display: flex;
       align-items: center;
       border-bottom: 1px solid #eaeaea;
    }
    .itemleft{
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
    .itemright{
         width:35%;
       .crown{
          width:30 / @pxtorem;
          height:26 / @pxtorem;
          vertical-align: top;
       }
       span{
          color:#a28542;
          font-size:26 / @pxtorem;
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
