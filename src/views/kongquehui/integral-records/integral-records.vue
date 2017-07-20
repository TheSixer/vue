<style lang="less">
@pxtorem: 20rem;
@baseColor: #a28542;

.integral-records {
  .body {
    margin-top: 15 / @pxtorem;
    background: #fff;
    .items {
      li {
        .list-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 144 / @pxtorem;
          padding: 20 / @pxtorem;
          border-bottom: .5px solid #f0f0f0;
          .type {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 52 / @pxtorem;
            font-size: 28 / @pxtorem;
            color: @baseColor;
            span {
              height: 52 / @pxtorem;
              line-height: 52 / @pxtorem;
            }
            span:first-child {
              color: #c97c20;
            }
          }
          .time {
            text-align: left;
            width: 100%;
            height: 52 / @pxtorem;
            line-height: 52 / @pxtorem;
            font-size: 24 / @baseColor;
            color: #999999;
          }
        }
      }
      li:last-child {
        .list-item {
          border-bottom: none;
        }
      }
    }
  }
}

</style>

<template>
  <div class="integral-records">
    <Heade title="积分变更记录"></Heade>

    <div class="body">
      <ul class="items">
        <li>
          <div class="list-item">
            <div class="type">
              <span>返佣</span>
              <span>+10</span>
            </div>
            <div class="time">2017-07-06 12:23:23</div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="type">
              <span>返佣</span>
              <span>+10</span>
            </div>
            <div class="time">2017-07-06 12:23:23</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'

export default {
  data () {
    return {

    }
  },
  components: {
    Heade
  },
  computed: {

  },
  methods: {

  }
}
</script>
