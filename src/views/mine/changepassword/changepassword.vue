<template>
  <div class="bind">
    <Heade title="修改支付密码"></Heade>
    <Form ref="formBind" :model="formBind">
        <Form-item prop="user">
            <i class="icon-phone">
              <img src="../../../assets/images/phone.png">
            </i>
            <Input type="text" v-model="formBind.user" placeholder="Username">
            </Input>
        </Form-item>
        <Form-item prop="password">
            <i class="icon-code">
              <img src="../../../assets/images/code.png">
            </i>
            <Input type="password" v-model="formBind.password" placeholder="Password">
            </Input>
            <button class="getCode" @click="getCode('formBind')">获取验证码</button>
        </Form-item>

        <div class="btn-item">
          <button class="bindBtn" @click="bindSubmit('formBind')" long>下一步</button>
        </div>
    </Form>
  </div>
</template>
<script>
    import Heade from '@/components/wordHeader/wordHeader'
    export default {
      components: {
        Heade
      },
      data () {
        return {
          formBind: {
            user: '',
            password: ''
          },
          ruleInline: {
            user: [
              { required: true, message: '请填写用户名', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请填写密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        bindSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!')
            } else {
              this.$Message.error('表单验证失败!')
            }
          })
        },
        getCode () {

        }
      }
    }
</script>

<style lang="less">
@pxtorem: 20rem;
@btnColor: #dad4a2;
@baseColor: #715e33;

.bind {
  height: 100%;
  background: #f0f0f0;
  .ivu-form {
    padding: 20 / @pxtorem 0;
    .ivu-form-item {
      height: 100 / @pxtorem;
      box-sizing: border-box;
      padding: 20 / @pxtorem 15 / @pxtorem;
      margin: 0 0 10 / @pxtorem 0;
      background: #FFFFFF;
      .ivu-form-item-content {
        display: flex;
        .icon-phone {
          width: 29 / @pxtorem;
          height: 43 / @pxtorem;
          margin: 8.5 / @pxtorem 15 / @pxtorem 0 0;
          img {
            width: 29 / @pxtorem;
            height: 43 / @pxtorem;
            vertical-align: top;
          }
        }
        .icon-code {
          width: 32 / @pxtorem;
          height: 36 / @pxtorem;
          margin: 12 / @pxtorem 13 / @pxtorem 0 0;
          img {
            width: 32 / @pxtorem;
            height: 36 / @pxtorem;
            vertical-align: top;
          }
        }
        .ivu-input {
          height: 60 / @pxtorem;
          border: none;
        }
      }
      .getCode {
        // font-size: 28 / @pxtorem;
        width: 170 / @pxtorem;
        height: 60 / @pxtorem;
        border-radius: 6 / @pxtorem;
        color: @baseColor;
        background: @btnColor;
        margin-left: 15 / @pxtorem;
      }
    }

    .btn-item {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 80 / @pxtorem 15 / @pxtorem;
      button {
        font-size: 34 / @pxtorem;
        width: 100%;
        height: 90 / @pxtorem;
        border-radius: 6 / @pxtorem;
        color: @baseColor;
        background: @btnColor;
      }
    }
  }
}
</style>
