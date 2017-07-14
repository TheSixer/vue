<template>
  <div class="verify">
    <Form ref="formBind" :model="formBind">


      <div class="btn-item">
        <button class="bindBtn" @click="next('formBind')" long>下一步</button>
      </div>
    </Form>
  </div>

</template>

<script>
export default {
  data () {
    return {
      formBind: {

      }
    }
  },
  methods: {
    next () {
      this.$router.push('import-password')
    }
  }
}
</script>
