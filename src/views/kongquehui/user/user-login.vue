<template>
    <Form ref="formItem" :model="formInline" :rules="ruleInline">
        <Form-item prop="userName">
            <Input type="text" v-model="formInline.userName" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formItem')">登录</Button>
        </Form-item>
    </Form>
</template>
<script>
    export default {
      data () {
        return {
          formInline: {
            userName: '',
            password: ''
          },
          ruleInline: {
            userName: [
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
        handleSubmit (name) {
          // 这个验证是element-ui框架提供的方法
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$store.dispatch('userLogin', {'userName': this.formInline.userName, 'password': this.formInline.password})
              this.$Message.success('提交成功!')
            } else {
              this.$Message.error('表单验证失败!')
            }
          })
        }
      }
    }
</script>
