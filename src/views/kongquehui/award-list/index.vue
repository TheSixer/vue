<style lang="less">
@pxtorem: 20rem;

.confirm-order {
  padding-bottom: 200 / @pxtorem;
	.body {
		.store {
			a {
				display: flex;
				align-items: center;
        justify-content: space-between;
				padding: 20 / @pxtorem 30 / @pxtorem;
        width: 100%;
        height: 90 / @pxtorem;
        background: #fff;
        font-size: 28 / @pxtorem;
        color: #666;
        img {
          width: 28 / @pxtorem;
          height: 16 / @pxtorem;
          transform: rotate(-90deg);
        }
			}
      .store-info {
        padding: 20 / @pxtorem 30 / @pxtorem;
        background: #fff;
        border-top: .5px solid #f0f0f0;
        h4 {
          font-size: 28 / @pxtorem;
          color: #333;
        }
        .phone {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 10 / @pxtorem 0;
          img {
            width: 30 / @pxtorem;
            height: 30 / @pxtorem;
            vertical-align: bottom;
            margin-right: 15 / @pxtorem;
          }
          span {
            font-size: 28 / @pxtorem;
            color: #a28542;
          }
        }
        .address {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          // padding: 10 / @pxtorem 0;
          img {
            width: 28 / @pxtorem;
            height: 35 / @pxtorem;
            vertical-align: bottom;
            margin-right: 15 / @pxtorem;
          }
          span {
            font-size: 28 / @pxtorem;
            color: #666;
          }
        }
      }
		}
    .items {
      margin-top: 20 / @pxtorem;
      ul {
        li {
          .item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 180 / @pxtorem;
            padding: 15 / @pxtorem 30 / @pxtorem 15 / @pxtorem 180 / @pxtorem;
            margin-bottom: 20 / @pxtorem;
            background: #fff;
            img {
              position: absolute;
              left: 30 / @pxtorem;
              width: 150 / @pxtorem;
              height: 150 / @pxtorem;
            }
            .item-info {
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
              height: 150 / @pxtorem;
              padding: 10 / @pxtorem 0 10 / @pxtorem 20 / @pxtorem;
              .name {
                color: #333;
                font-size: 26 / @pxtorem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              .num {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                .sum {
                  .count {
                    color: #d16f20;
                    font-size: 24 / @pxtorem;
                    i {
                      font-size: 32 / @pxtorem;
                    }
                  }
                  .origin {
                    color: #999;
                    font-size: 22 / @pxtorem;
                    text-decoration: line-through;
                  }
                }
                .ti {
                  color: #333;
                  font-size: 28 / @pxtorem;
                }
              }
            }
          }
        }
      }
    }
	}
  .submit {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 50 / @pxtorem 30 / @pxtorem;
    background: #f0f0f0;
    button {
      width: 100%;
      height: 90 / @pxtorem;
      border-radius: 6 / @pxtorem;
      color: #715e33;
      font-size: 32 / @pxtorem;
      background: #dad4a2;
    }
    button:disabled {
      color: #999;
      background: #bbbbbb;
    }
  }
}
</style>

<template>
  <div class="confirm-order">
		<div class="body">
			<div class="store">
				<router-link to="">
					<span>选择服务门店</span>
					<img src="../../assets/images/arrow-down.png" alt="">
				</router-link>
				<div class="store-info">
					<h4>门店名称</h4>
					<div class="phone">
						<img src="../../assets/images/phone.png" alt="">
						<span>020-23232323</span>
					</div>
					<div class="address">
						<img src="../../assets/images/position.png" alt="">
						<span>上海市宝山区</span>
					</div>
				</div>
			</div>

      <div class="items">
        <ul>
          <li>
            <router-link to="" class="item">
              <img src="../../assets/images/combo.png">
              <div class="item-info">
                <p class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
                <div class="num">
                  <p class="sum">
                    <span class="count">￥<i>10</i>.00</span>
                    <span class="origin">￥128.00</span>
                  </p>
                  <span class="ti">x 1</span>
                </div>
              </div>
            </router-link>
          </li>
           <li>
          <li>
            <router-link to="" class="item">
              <img src="../../assets/images/combo.png">
              <div class="item-info">
                <p class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
                <div class="num">
                  <p class="sum">
                    <span class="count">￥<i>10</i>.00</span>
                    <span class="origin">￥128.00</span>
                  </p>
                  <span class="ti">x 1</span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
          <li>
            <router-link to="" class="item">
              <img src="../../assets/images/combo.png">
              <div class="item-info">
                <p class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
                <div class="num">
                  <p class="sum">
                    <span class="count">￥<i>10</i>.00</span>
                    <span class="origin">￥128.00</span>
                  </p>
                  <span class="ti">x 1</span>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="" class="item">
              <img src="../../assets/images/combo.png">
              <div class="item-info">
                <p class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
                <div class="num">
                  <p class="sum">
                    <span class="count">￥<i>10</i>.00</span>
                    <span class="origin">￥128.00</span>
                  </p>
                  <span class="ti">x 1</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
		</div>

    <div class="submit">
      <button>确认领取</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
