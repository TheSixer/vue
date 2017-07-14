<template>
  <div class="import-password">
    请确认支付密码
    <Form ref="formBind" :model="formBind">

        <div class="btn-item">
          <button class="bindBtn" @click="confirm('formBind')" long>确定</button>
        </div>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formBind: {}
    }
  },
  methods: {
    confirm () {

    }
  }
}
</script>
