<style lang="less">
@pxtorem: 20rem;
@baseColor: #a28542;

.balance-records {
  .body {
    margin-top: 100 / @pxtorem;
    background: #fff;
    .ivu-form {
      padding: 0;
      .ivu-form-item {
        height: 100 / @pxtorem;
        box-sizing: border-box;
        padding: 20 / @pxtorem 15 / @pxtorem;
        margin: 0 0 10 / @pxtorem 0;
        background: #FFFFFF;
        .ivu-form-item-content {
          display: flex;
          i {
            font-size: 28 / @pxtorem;
            width: 32%;
            height: 60 / @pxtorem;
            line-height: 60 / @pxtorem;
            color: #666;
            span {
              font-size: 24 / @pxtorem;
            }
          }
          .ivu-input {
            height: 60 / @pxtorem;
            border: none;
            font-size: 28 / @pxtorem;
            box-shadow: none;
          }
        }
      }
      .btn-item {
        position: fixed;
        width: 100%;
        padding: 90 / @pxtorem 20 / @pxtorem;
        left: 0;
        bottom: 0;
        button {
          height: 90 / @pxtorem;
          width: 100%;
          font-size: 34 / @pxtorem;
          color: #715e33;
          background: #dad4a2;
          border-radius: 6 / @pxtorem;
        }
      }
    }
  }
}

</style>

<template>
  <div class="balance-records">
    <Heade title="充值"></Heade>

    <div class="body">
      <Form ref="formWithdraw" :model="formWithdraw">
        <Form-item prop="user">
            <i class="name">
              充值金额
            </i>
            <Input type="text" v-model="formWithdraw.count" placeholder="请输入充值金额">
            </Input>
        </Form-item>

        <div class="btn-item">
          <button class="enrollBtn" @click="enrollSubmit('formEnroll')" long>确定</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import Heade from '@/components/wordHeader/wordHeader'

export default {
  data () {
    return {
      formWithdraw: {
        count: ''
      }
    }
  },
  components: {
    Heade
  },
  methods: {
    enrollSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>
