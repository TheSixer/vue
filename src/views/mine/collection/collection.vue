<template>
    <div class="collection">
         <Heade title="我的收藏"></Heade>
         <Tabs value="name1">
            <Tab-pane label="活动" name="name1">
              <ul class="list-items">
                <li>
                  <div class="goods">
                       <div class="left"><img src="/static/img/goods.89a3a36.png"></div> 
                       <div class="goodstxt">
                          <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2> 
                          <div class="price">
                              <p><small>￥</small>2000美分<i>¥128.00</i></p>
                          </div>
                       </div>
                </div>
                </li>
                <li>
                  <div class="goods">
                       <div class="left"><img src="/static/img/goods.89a3a36.png"></div> 
                       <div class="goodstxt">
                          <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2> 
                          <div class="price">
                              <p><small>￥</small>2000美分<i>¥128.00</i></p>
                          </div>
                       </div>
                </div>
                </li>
                <li>
                  <div class="goods">
                       <div class="left"><img src="/static/img/goods.89a3a36.png"></div> 
                       <div class="goodstxt">
                          <h2>商品名称商品名商品名称商品名称商品名称商品名称商品称商品名称商品名称商品</h2> 
                          <div class="price">
                              <p><small>￥</small>2000美分<i>¥128.00</i></p>
                          </div>
                       </div>
                </div>
                </li>
                </li>
              </ul>
            </Tab-pane>
            <Tab-pane label="商品" name="name2">
              <ul class="list-items">
                <li v-for="(item, index) of defaultList" v-bind:key="item.id">
                  <div class="list-item">
                    <div class="rank">
                      <template v-if="index === 0">
                        <img src="../../../assets/images/rank01.png">
                      </template>
                      <template v-else-if="index === 1">
                        <img src="../../../assets/images/rank02.png">
                      </template>
                      <template v-else-if="index === 2">
                        <img src="../../../assets/images/rank03.png">
                      </template>
                      <template v-else>
                        NO.
                      </template>
                      {{ index + 1 }}
                    </div>
                    <div class="user-info">
                      <img src="../../../assets/images/userHead.png">
                      <span>{{ item.name }}</span>
                    </div>
                    <div class="other-info">
                      <div class="alone">支持票数：<i>{{ item.ballot }}</i></div>
                    </div>
                  </div>
                </li>
              </ul>
            </Tab-pane>
        </Tabs>
    </div> 
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
 
    .collection{
    .ivu-tabs {
   
    .ivu-tabs-bar {
     background: #FFFFFF;
     margin-bottom: 20 / @pxtorem;
    .ivu-tabs-nav-scroll {
      display: flex;
      align-items:center;
      justify-content:center;
      border-top:1px solid #eaeaea;
      .ivu-tabs-nav {
        display: inline-flex;
        .ivu-tabs-ink-bar {
          background-color: #c97c20;
        }
        .ivu-tabs-tab {
          // margin-right: 148 / @pxtorem;
          line-height: 84 / @pxtorem;
          color: #666;
          font-size: 32 / @pxtorem;
        }
        .ivu-tabs-tab-active {
          color: #a28542;
        }
        .ivu-tabs-tab:active {
          color: #a28542;
        }
        .ivu-tabs-tab:hover {
          color: #a28542;
        }
        .ivu-tabs-tab:last-child {
          margin-right: 0;
        }
      }
    }
    }
   
   
     .goods{
        background:#fff;
        padding:20 / @pxtorem; 
        display: flex;
        margin-bottom:20 / @pxtorem;
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
  }
 }


</style>
<script>
import Heade from '@/components/wordHeader/wordHeader'
export default {
  data () {
    return {
      defaultList: [
        {
          'id': 1,
          'name': 'Ally',
          'imageUrl': '../../../assets/images/userHead.png',
          'ballot': 2378
        },
        {
          'id': 2,
          'name': 'Nanci',
          'imageUrl': '../../../assets/images/userHead.png',
          'ballot': 4230
        },
        {
          'id': 3,
          'name': 'Lois',
          'imageUrl': '../../../assets/images/userHead.png',
          'ballot': 3833
        },
        {
          'id': 4,
          'name': 'Jawells',
          'imageUrl': '../../../assets/images/userHead.png',
          'ballot': 3833
        },
        {
          'id': 5,
          'name': 'Alis',
          'imageUrl': '../../../assets/images/userHead.png',
          'ballot': 2343
        },
        {
          'id': 6,
          'name': 'Li',
          'imageUrl': '../../../assets/images/userHead.png',
          'ballot': 4564
        }
      ]
    }
  },
  components: {
    Heade
  }
}
</script>
