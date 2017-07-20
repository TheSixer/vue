<style lang="less">
@pxtorem: 20rem;

.support-records {
  .body {
    margin-top: 15 / @pxtorem;
    .items {
      li {
        margin-bottom: 20 / @pxtorem;
        .list-item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          width: 100%;
          // height: 238 / @pxtorem;
          padding: 20 / @pxtorem;
          background: #FFFFFF;
          .userInfo {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            width: 100%;
            img {
              width: 89 / @pxtorem;
              height: 89 / @pxtorem;
              margin-right: 20 / @pxtorem;
            }
            .username {
              color: #666;
              font-size: 28 / @pxtorem;
              margin-right: 20 / @pxtorem;
            }
            .what {
              color: #a28542;
              font-size: 26 / @pxtorem;
            }
          }
          .content {
            color: #333;
            font-size: 32 / @pxtorem;
            width: 100%;
            margin: 20 / @pxtorem 0;
          }
          .time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            width: 100%;
            height: 40 / @pxtorem;
            img {
              width: 31 / @pxtorem;
              height: 31 / @pxtorem;
              margin-right: 20 / @pxtorem;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="support-records">
    <Heade title="谁为我投票"></Heade>

    <div class="body">
      <ul class="items">
        <li>
          <div class="list-item">
            <div class="userInfo">
              <img src="../../assets/images/userHead.png">
              <span class="username">Ally</span>
              <span class="what">为我投了一张免费票</span>
            </div>
            <p class="content">秀名称秀名称秀名称秀名称</p>
            <div class="time">
              <img src="../../assets/images/time.png">
              <span>2017/7/12 10:21:23</span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="userInfo">
              <img src="../../assets/images/userHead.png">
              <span class="username">Ally</span>
              <span class="what">为我投了一张免费票</span>
            </div>
            <p class="content">秀名称秀名称秀名称秀名称</p>
            <div class="time">
              <img src="../../assets/images/time.png">
              <span>2017/7/12 10:21:23</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'
export default {
  components: {
    Heade
  }
}
</script>
